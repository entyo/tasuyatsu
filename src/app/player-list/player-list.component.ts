import { Component, OnInit } from '@angular/core';

import { Sound } from '../shared/models/sound';
import { SoundStore } from '../shared/stores/sound.store';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  constructor(protected store: SoundStore) { }

  ngOnInit() {
  }

  updateSound(sound: Sound) {
    this.store.update(sound.id, sound);
  }

  removeSound(sound: Sound) {
    this.store.delete(sound.id);
  }

}
