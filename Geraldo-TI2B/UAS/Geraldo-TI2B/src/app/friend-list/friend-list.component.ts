import { FriendService } from './../shared/friend.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {

  constructor(private friendService: FriendService) { }
  friendArray = [];
  searchText: string = "";

  ngOnInit() {
    this.friendService.getFriends().subscribe(
      list => {
        this.friendArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          }
        })
      }
    );
  }

  filterCondition(friend) {
    return friend.nama.toUpperCase().indexOf(this.searchText.toUpperCase()) != -1 || friend.contact.indexOf(this.searchText) != -1;
  }

}
