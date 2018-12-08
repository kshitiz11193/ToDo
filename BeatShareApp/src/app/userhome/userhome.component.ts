import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { AppGlobals } from '../app.global';
@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']

})
export class UserhomeComponent implements OnInit {
  username:String='';
  constructor(private _user:UserService, private _router:Router, private _global: AppGlobals) {
    this._user.user()
    .subscribe(
      data=>this.addName(data),
      error=>this._router.navigate(['/login'])
    )
  }
  addName(data) {
    this.username = data.username;
  }
  ngOnInit() {
  }
  logout() {
    this._user.logout()
      .subscribe(
        data => { console.log(data); this._router.navigate(['/login']);  this._global.flag = false  },
        error => console.error(error)
      )
  }

}
