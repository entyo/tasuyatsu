import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements OnInit {

  private playing: boolean;
  private repeatingState: string;

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

}
