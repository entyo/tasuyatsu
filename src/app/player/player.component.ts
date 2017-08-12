import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sound } from '../shared/models/sound';
import * as global from '../global';
import { AudioService } from '../audio.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements OnInit {
  @Input() sound: Sound;

  @Output() update = new EventEmitter<Sound>();
  @Output() remove = new EventEmitter<Sound>();

  constructor(private audioService: AudioService) {}

  ngOnInit() {
  }

  play() {
    this.sound.loading = true;
    this.update.emit(this.sound);

    this.audioService.play(this.sound)
    .then(s => {
      s.loading = false;
      this.update.emit(s);
      console.log('Played');
      console.log(this.sound);
    });
  }

  stop() {
    this.audioService.stop(this.sound)
    .then(s => {
      console.log('Stopped');
      this.update.emit(s);
    });
  }

  switchLoop() {
    this.sound.loop = !this.sound.loop;
    console.log('loop: ', this.sound.loop);
    this.update.emit(this.sound);
  }

  editTitle(newTitle: string) {
    this.sound.title = newTitle;
    this.update.emit(this.sound);
  }

  removeSound(e: Event) {
    e.stopPropagation();
    this.remove.emit(this.sound);
  }

  switchEditMode() {
    this.sound.editing = !this.sound.editing;
    this.update.emit(this.sound);
  }

  changeVolume(v: number) {
    if (!this.sound.gainNode) {
      return;
    }
    // TODO: Volumeの最大値はModuleの一部として定数をまとめたファイルみたいなところで定義する
    this.sound.gainNode.gain.value = this.audioService.calcGainValue(v, 100);
    console.log('Volume changed: ', this.sound.gainNode.gain.value);
    this.update.emit(this.sound);
  }

}
