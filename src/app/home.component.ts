import {Component} from '@angular/core';

/////////////////////////
// ** Example Components
@Component({
  selector: 'home',
  template: `
    <div>This is the "Home" page</div>
    <button (click)="onClick()">Say Hello</button>
  `
})
export class Home { 
  onClick() {
    alert('hello');
  }
}