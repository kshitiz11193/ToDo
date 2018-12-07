import { Component, OnInit } from '@angular/core';

import { BeatShareUsersService } from '../shared/beat-share-users.service';
import { BeatShareUsers } from '../shared/beat-share-users.model';
@Component({
  selector: 'app-beat-share-users',
  templateUrl: './beat-share-users.component.html',
  styleUrls: ['./beat-share-users.component.css'],
  providers: [BeatShareUsersService]
})
export class BeatShareUsersComponent implements OnInit  {
  constructor(private beatUserService: BeatShareUsersService) { }

  ngOnInit(){
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
