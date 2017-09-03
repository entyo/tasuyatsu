import { Component, OnInit } from '@angular/core';

import { Sound } from '../shared/models/sound';
import { SoundStore } from '../shared/stores/sound.store';
import { AudioService } from '../audio.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  constructor(public store: SoundStore, public audio: AudioService) { }

  ngOnInit() {
  }

  updateSound(sound: Sound) {
    this.store.update(sound.id, sound);
  }

  removeSound(sound: Sound) {
    this.audio.stop(sound)
    .then(() => {
      this.store.delete(sound.id);
    })
    .catch(error => {
      console.log('Failed to stop sound: ', error);
      this.store.delete(sound.id);
    });
  }

}
