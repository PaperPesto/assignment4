import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output('counter') serverCreated = new EventEmitter<{ counter: number }>();
  counter: number;
  setIntervalReference;

  constructor() { 
    this.counter = 0;
  }

  ngOnInit() {
  }

  onStart(){
    console.log('Pressed start button');

    if(this.setIntervalReference){
      console.log('setIntervalReference already opened at:', this.setIntervalReference);
    }
    else{
      this.setIntervalReference = setInterval(() => {
        this.serverCreated.emit({counter: this.counter});
        this.counter = this.counter + 1;
        console.log('Ref: %s - Counter: %s', this.setIntervalReference, this.counter);
      }, 1000);
  
      console.log('opened setInterval reference:', this.setIntervalReference);
    }
  }

  onStop(){
    console.log('Pressed stop button');

    clearInterval(this.setIntervalReference);
    console.log('closed setInterval reference:', this.setIntervalReference);
    this.counter = 0;
    this.setIntervalReference = null;
  }
}
