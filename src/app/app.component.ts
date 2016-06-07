import {Component, Directive, ElementRef, Renderer} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {Http} from '@angular/http';

import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdRadioButton} from '@angular2-material/radio';
import {MdRadioDispatcher} from '@angular2-material/radio/radio_dispatcher';
import {MdSpinner} from '@angular2-material/progress-circle';
import {MdProgressBar} from '@angular2-material/progress-bar';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

import {UserService} from '../services/user.service';
import {XLarge} from './xlarge.component';
import {Home} from './home.component';
import {About} from './about.component';
import {UserList} from './user-list.component';

/////////////////////////
// ** MAIN APP COMPONENT **
@Component({
  selector: 'app', // <app></app>
  providers: [UserService],
  directives: [
    ...ROUTER_DIRECTIVES,
    XLarge,
    MD_SIDENAV_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdToolbar,
    MdButton,
    MdCheckbox,
    MdRadioButton,
    MdSpinner,
    MD_INPUT_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdProgressBar,
    MdIcon,
    UserList
  ],
  template: `
  <md-toolbar color="primary">
    Angular Universal Example App
  </md-toolbar>
  <md-card>
   <md-card-title>
      <div x-large>Universal JavaScript {{ title }}</div>
   </md-card-title>   
   <md-card-content>
      <router-outlet></router-outlet>
   </md-card-content>
   <md-card-actions>
      <a [routerLink]=" ['./About'] ">About</a>
      <a [routerLink]=" ['./Users'] ">Users</a>
      <a [routerLink]=" ['./Home'] ">Home</a>
   </md-card-actions>
  </md-card>
  `
})
@RouteConfig([
  { path: '/', component: Home, name: 'Home', useAsDefault: true },
  { path: '/home', component: Home, name: 'Home' },
  { path: '/users-list', component: UserList, name: 'Users' },
  { path: '/about', component: About, name: 'About' },
  { path: '/**', redirectTo: ['Home'] }
])
export class App {
  title: string = 'is awesome!!!!';
  data = {};
  server: string;
  users: any;

  constructor(
    public http: Http
  ) { }

}
