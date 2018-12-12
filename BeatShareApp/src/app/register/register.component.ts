import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { UserService } from '../user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _router:Router,private _userService:UserService) { }

  ngOnInit() {
  }
  //reactive forms module is used for form validation like email validation and password validation
  registerForm:FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    username:new FormControl(null,Validators.required),
    password:new FormControl(null,Validators.required),
    cpass:new FormControl(null,Validators.required)
  })
  moveToLogin(){
    this._router.navigate(['/login']);
  }

register()
{
  if(!this.registerForm.valid || (this.registerForm.controls.password.value != this.registerForm.controls.cpass.value)){
    console.log('Invalid Form'); return;
  }
  else{
   console.log( JSON.stringify(this.registerForm.value));
  }

  this._userService.register(JSON.stringify(this.registerForm.value))
    .subscribe(
      data=> {console.log(data); this._router.navigate(['/login']);},
      error=>console.error(error)
    )
}


}
