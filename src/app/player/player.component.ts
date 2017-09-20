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

  private gain: number;

  constructor(private audioService: AudioService) {}

  ngOnInit() {
  }

  play() {
    this.sound.loading = true;
    this.update.emit(this.sound);

    this.audioService.play(this.sound, this.gain)
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
    this.audioService.switchLoop(this.sound).then(sound => {
      this.update.emit(sound);
      console.log('loop: ', this.sound.loop);
    });
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

  onChangeGainRange(v: number) {
    // TODO: Volumeの最大値はModuleの一部として定数をまとめたファイルみたいなところで定義する
    this.gain = this.audioService.calcGainValue(v, 100);
    this.audioService.changeGain(this.sound, this.gain).then(sound => {
      this.update.emit(this.sound);
      console.log('Volume changed: ', sound.gainNode.gain.value);
    });
  }

}
