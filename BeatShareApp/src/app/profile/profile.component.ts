import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../user.service';
import { BeatShareUsersService } from '../shared/beat-share-users.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private cookieService: CookieService,private userService:UserService,private beatUserService: BeatShareUsersService) { }
  inputString:String="value";
  ngOnInit() {
  }
  editUser()
  {
    this.userService.editUser( this.inputString,this.cookieService.get('email')).then(
      data=>{console.log("Hello world"+data);},
      error=>console.error(error)
     )
  }
 
}
