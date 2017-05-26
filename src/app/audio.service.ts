import { Injectable, Inject } from '@angular/core';
import * as global from './global';

@Injectable()
export class AudioService {

  constructor() {}

  loadAudio(uri: string): Promise<ArrayBuffer> {
    return new Promise( (resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', uri, true);
      xhr.responseType = 'arraybuffer'; 
  
      xhr.onload = () => {
        if (xhr.status !== 200) {
          reject(new Error('Audio data couldn\'t be loaded successfully; error code:' + xhr.statusText));
        }
        global.audioContext.decodeAudioData(xhr.response, (buf) => {
          resolve(buf);
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

}
