import {Component, Input} from '@angular/core';
import {User} from './user.component';
import {MdList, MdListItem} from '@angular2-material/list';
import {UserService} from '../services/user.service';

@Component({
  selector: 'user-list',
  directives: [MdList, MdListItem, User], 
  template: `
    <h4>Users List</h4>
    <md-list>
       <md-list-item *ngFor="let user of users">
          <user [data]="user">
          </user>
       </md-list-item>
    </md-list>
  `
})
export class UserList {
  users: any;

  constructor(
    private userService: UserService
  ) {
    this.userService.getUsers().subscribe(res => this.users = res.json());
  }
 }