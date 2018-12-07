import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$: Object;
  constructor(private data: DataService, private userService:UserService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users$ = data
    );
  }

  
  
  

}
