import { Injectable, provide } from '@angular/core';
import {Http, Request, Response, Headers} from '@angular/http';

@Injectable()
export class UserService {

  private USERS_URL = 'http://localhost:3000/users';

  constructor(
    private _http: Http
  ) {}

  public getUsers() {
    return this._http.get(this.USERS_URL);
  }

}
