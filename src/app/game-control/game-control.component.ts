import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output('counter') serverCreated = new EventEmitter<{ counter: number }>();
  counter: number;

  constructor() { 
    this.counter = 0;
  }

  ngOnInit() {
  }

  onStart(){
    console.log('Pressed start button');

    setInterval(() => {
      this.serverCreated.emit({counter: this.counter});
      this.counter = this.counter + 1;
      console.log('Incrementato counter:', this.counter);
    }, 1000)
  }
}
