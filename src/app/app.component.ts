import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment4';

  numbers: any[]=[];

  onCounterAdded(payload: any){

    console.log('[app.component.ts] Aggiunto counter', payload);

    if(payload.counter % 2 === 0) {
      console.log('even number:', payload.counter);
    }
    else{
      console.log('odd number:', payload.counter);
    }
  }
}
