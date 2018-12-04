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

  onCounterAdded(payload: any) {

    console.log('[app.component.ts] Aggiunto counter', payload);

    if (payload.counter % 2 === 0) {
      console.log('even number:', payload.counter);
      this.evenNumbers.push(payload.counter);
    }
    else {
      console.log('odd number:', payload.counter);
      this.oddNumbers.push(payload.counter);
    }
  }
}
