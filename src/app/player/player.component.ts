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
  private repeatingState: string;
  private editing = false;

  @Output() update = new EventEmitter<Sound>();
  @Output() remove = new EventEmitter<Sound>();

  constructor() {
    this.playing = false;
    this.repeatingState = 'inactive';
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
  
  toggleRepeatingState() {
    this.repeatingState = (this.repeatingState === 'active' ? 'inactive' : 'active');
    console.log("RepeatingState: ", this.repeatingState);
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
