import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sound } from '../shared/models/sound';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements OnInit {
  @Input() sound: Sound;
  private playing: boolean;
  private loop: boolean;
  private editing = false;

  @Output() update = new EventEmitter<Sound>();
  @Output() remove = new EventEmitter<Sound>();

  constructor(private audioService: AudioService) {
    this.playing = false;
    this.loop = false;
  }

  ngOnInit() {
  }

  play() {
    console.log("Played");
    this.playing = true;
  }

  pause() {
    console.log("Paused");
    this.playing = false;
  }
  
  switchLoop() {
    this.loop = !this.loop
    console.log("loop: ", this.loop);
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
    this.editing = !this.editing;
  }

}
