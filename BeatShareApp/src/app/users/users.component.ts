import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { BeatShareUsersService } from '../shared/beat-share-users.service';
import { BeatShareUsers } from '../shared/beat-share-users.model';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [BeatShareUsersService]
})
export class UsersComponent implements OnInit {
  users$: Object;
  constructor(private data: DataService, private userService:UserService,private beatUserService: BeatShareUsersService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users$ = data
    );
    this.refreshUserList();
  }

  

  
  refreshUserList() {
    this.beatUserService.getEmployeeList().subscribe((res) => {
      this.beatUserService.beatUser = res as BeatShareUsers[];
    });
  }
  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.beatUserService.deleteEmployee(_id).subscribe((res) => {
        this.refreshUserList();
      
      });
    }
  }
  
  

}
