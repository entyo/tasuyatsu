import { Component, OnInit } from '@angular/core';

import { Sound } from '../shared/models/sound';
import { SoundStore } from '../shared/stores/sound.store';
import { AudioService } from '../audio.service';

@Component({
  selector: 'app-add-sound',
  templateUrl: './add-sound.component.html',
  styleUrls: ['./add-sound.component.css']
})
export class AddSoundComponent implements OnInit {
  public fileURL: string;

  constructor(protected store: SoundStore, private audioService: AudioService) { }

  ngOnInit() {
  }

  addSound() {
    this.store.insert(new Sound(this.getBaseName(this.fileURL), this.fileURL))
    this.fileURL = "";
  }

  getBaseName(uri: string) {
    return uri.split(/[\\/]/).pop()
  }
}
