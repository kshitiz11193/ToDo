import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { CookieService } from 'ngx-cookie-service';
import {AppGlobals} from '../app.global';


@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']

})
export class UserhomeComponent implements OnInit {
  username:String='';
  constructor(private _user:UserService, private _router:Router, private cookie: CookieService, private _global:AppGlobals) {
    this._user.user()
    .subscribe(
      data=>this.addName(data),
      error=>this._router.navigate(['/login'])
    )
  }
  addName(data) {
    this.username = data.username;
    console.log("inside addName"+data.username+"");
  }
  ngOnInit() {
    console.log("cookie email" + this.cookie.get('email'))
  }
  logout() {
    this._user.logout()
      .subscribe(
        data => { console.log(data); this._router.navigate(['/login']); },
        error => console.error(error)
      )
  }

}
