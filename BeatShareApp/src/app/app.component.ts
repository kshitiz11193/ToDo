//import { AppGlobals } from './app.global';
import { Component } from '@angular/core';
import { BeatShareUsersService } from './shared/beat-share-users.service';
import { BeatShareUsers } from './shared/beat-share-users.model';
import { AppGlobals } from './app.global';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'frontend';


  constructor(private _global: AppGlobals){

  }

  // ngAfterViewInit() {
  //   //console.log(localStorage.get('userid'));
  //   if(localStorage.get('userid')){
  //     this.flag = false;
  //   }
  // }




}
