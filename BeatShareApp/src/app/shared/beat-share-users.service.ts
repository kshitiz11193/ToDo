import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { BeatShareUsers } from './beat-share-users.model';
import { UsersComponent } from '../users/users.component';

@Injectable({
  providedIn: 'root'
})
export class BeatShareUsersService {
  selectedUser: BeatShareUsers;
  beatUser: BeatShareUsers[];
  readonly baseURL = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  postEmployee(usr: BeatShareUsers) {
    return this.http.post(this.baseURL, usr);
  }

  getEmployeeList() {
    return this.http.get(this.baseURL);
  }

  putEmployee(usr: BeatShareUsers) {
    return this.http.put(this.baseURL + `/${usr._id}`, usr);
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}


