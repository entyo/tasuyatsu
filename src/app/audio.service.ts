import { Injectable, Inject } from '@angular/core';
import * as global from './global';

import { Sound } from './shared/models/sound';
import { SoundStore } from './shared/stores/sound.store';

@Injectable()
export class AudioService {

  constructor() {}

  load(sound: Sound): Promise<Sound> {
    return new Promise((resolve, reject) => {
      // 既に一度音源を取得している場合、XHRをせず単にnodeを作り直す
      if (sound.sourceNode) {
        const b = sound.sourceNode.buffer;
        sound.sourceNode = global.audioContext.createBufferSource();
        sound.sourceNode.buffer = b;
        sound.sourceNode.loop = sound.loop;
        resolve(sound);
        return;
      }

      const xhr = new XMLHttpRequest();
      xhr.open('GET', sound.url, true);
      xhr.responseType = 'arraybuffer';

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
      };

      xhr.send(null);
    });
  }

  play(sound: Sound, gain = 1.0): Promise<Sound> {
    return new Promise((resolve, reject) => {
      this.load(sound)
        .then(s => {
          s.gainNode = global.audioContext.createGain();
          s.gainNode.gain.value = gain;

          s.sourceNode.connect(s.gainNode);
          s.gainNode.connect(global.audioContext.destination);

          s.sourceNode.start();
          s.playing = true;

          resolve(s);
        });
    });
  }

  stop(sound: Sound): Promise<Sound> {
    return new Promise((resolve, reject) => {
      if (!sound.sourceNode) {
        reject(new Error('SoundにAudioBufferSourceNodeが設定されていません'));
      }

      sound.sourceNode.stop();
      sound.playing = false;

      resolve(sound);
    });
  }

  switchLoop(sound: Sound): Promise<Sound> {
    return new Promise(resolve => {
      sound.loop = !sound.loop;
      if (sound.sourceNode) {
        sound.sourceNode.loop = sound.loop;
      }
      resolve(sound);
    });
  }

  calcGainValue(vol: number, max: number) {
    console.log(vol, max);
    return Math.pow(vol / max, 2);
  }

  changeGain(sound: Sound, gain: number): Promise<Sound> {
    return new Promise(resolve => {
      if (!sound.gainNode) {
        return;
      }
      sound.gainNode.gain.value = gain;
      resolve(sound);
    });
  }

}
