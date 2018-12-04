import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment4';

  evenNumbers: number[] = [];
  oddNumbers: number[] = [];

  onCounterAdded(number: number) {

    console.log('[app.component.ts] Aggiunto counter', number);

    if (number % 2 === 0) {
      console.log('even number:', number);
      this.evenNumbers.push(number);
    }
    else {
      console.log('odd number:', number);
      this.oddNumbers.push(number);
    }
  }
}
