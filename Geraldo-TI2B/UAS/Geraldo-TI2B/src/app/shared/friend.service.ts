import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor(private firebase: AngularFireDatabase) { }
  friendList: AngularFireList<any>;
  

  form = new FormGroup({
    $key: new FormControl(null),
    nama: new FormControl('', [
      Validators.required, 
      Validators.minLength(3),
      Validators.maxLength(255),
    ]),
    email: new FormControl('',  [
      Validators.email, 
      Validators.required
    ]),
    contact: new FormControl('', [
      Validators.required, 
      Validators.pattern("^((\\+62-?)|0)?[0-9]{12}$"),
      Validators.minLength(12),

    ])
  });

  getFriends() {
    this.friendList = this.firebase.list('data');
    return this.friendList.snapshotChanges();
  }

  insertFriends(friend) {
    this.friendList.push({
      nama: friend.nama,
      email: friend.email,
      contact: friend.contact
    });
  }

  populateForm(friend) {
    this.form.setValue(friend);
  }

  updateFriend(friend) {
    this.friendList.update(friend.$key,
      {
        nama: friend.nama,
        email: friend.email,
        contact: friend.contact
      });
  }

  deleteFriend($key: string) {
    this.friendList.remove($key);
  }
}
