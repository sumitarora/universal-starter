import {Component, Input} from '@angular/core';

@Component({
  selector: 'user',
  template: `
    <pre>
      {{data}}
    </pre>
  `
})
export class User {
  @Input() data;
 }