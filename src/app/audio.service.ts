import { Injectable, Inject } from '@angular/core';
import * as global from './global';

import { Sound } from './shared/models/sound';
import { SoundStore } from './shared/stores/sound.store';

@Injectable()
export class AudioService {

  constructor() {}

  load(sound: Sound): Promise<Sound> {
    return new Promise( (resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', sound.url, true);
      xhr.responseType = 'arraybuffer';

      // 既に一度音源を取得している場合、XHRをせず単にnodeを作り直す
      if (sound.sourceNode) {
        const b = sound.sourceNode.buffer;
        sound.sourceNode = global.audioContext.createBufferSource();
        sound.sourceNode.buffer = b;
        sound.sourceNode.loop = sound.loop;          
        resolve(sound);
      }

      xhr.onload = () => {
        if (xhr.status !== 200) {
          reject(new Error('Audio data couldn\'t be loaded successfully; error code:' + xhr.statusText));
        }
        global.audioContext.decodeAudioData(xhr.response, (buf) => {
          sound.sourceNode = global.audioContext.createBufferSource();
          sound.sourceNode.buffer = buf;
          sound.sourceNode.loop = sound.loop;          
          resolve(sound);
        }, () => {
          reject(new Error('Audio data seemed to be loaded succesfully, but couldn\'t be decoded.'));
        });
      };

      xhr.onerror = () => {
        reject(new Error('Network error :-('));
      }
      
      xhr.send(null);
    });
  }

  play(sound: Sound): Promise<Sound> {
    return new Promise((resolve, reject) => {
      this.load(sound)
      .then(s => {
        s.gainNode = global.audioContext.createGain();
        s.gainNode.gain.value = 1.0;
  
        s.sourceNode.connect(s.gainNode);
        s.gainNode.connect(global.audioContext.destination);

        s.sourceNode.start();
        s.playing = true;

        resolve(s);
      });
    });   
  }

  pause(sound: Sound): Promise<Sound> {
    return new Promise((resolve, reject) => {
      if (!sound.sourceNode) {
        reject(new Error('SoundにAudioBufferSourceNodeが設定されていません'));
      }
      
      sound.sourceNode.stop();
      sound.playing = false;

      resolve(sound);
    });
  }

  calcGainValue(vol: number, max: number) {
    console.log(vol, max);
    return Math.pow(vol / max, 2);
  }

}
