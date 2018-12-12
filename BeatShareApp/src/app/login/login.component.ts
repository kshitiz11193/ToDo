import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import {AppGlobals} from '../app.global';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  constructor(private _router:Router,private  _user:UserService, private cookie: CookieService, private _global:AppGlobals) { }
  loginForm : FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null, Validators.required)
  });
  ngOnInit() {
  }
  moveToRegister(){
    this._router.navigate(['/register']);
  }

//subscribing to the data obtained from the login method of user.service.ts file (rest api)
  login(){
    if(!this.loginForm.valid){
      console.log('Invalid');return;
    }

    // console.log(JSON.stringify(this.loginForm.value));
    this._user.login(JSON.stringify(this.loginForm.value))
    .subscribe(
      data=>{console.log(data);this._router.navigate(['/user']); this.cookie.set("email", this.email);} ,
      error=>console.error(error),
      this._global.flag=true;
    )
  }

}
