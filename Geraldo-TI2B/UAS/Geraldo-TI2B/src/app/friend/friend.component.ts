import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FriendService } from './../shared/friend.service';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {

  constructor(private friendService: FriendService) { }
  submitted: boolean;
  showSuccessMessage: boolean;
  formControls = this.friendService.form.controls;

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    if (this.friendService.form.valid) {
      if (this.friendService.form.get('$key').value == null)
        this.friendService.insertFriends(this.friendService.form.value);
      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 3000);
      this.submitted = false;
      this.friendService.form.reset();
    }
  }

}
