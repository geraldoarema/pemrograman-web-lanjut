import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { friend } from './friend';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private firestore: AngularFirestore) { }

  getFriends()
  {
    return this.firestore.collection('friend').snapshotChanges();
  }

  createFriends(Friend:friend)
  {
    return this.firestore.collection('friend').add(Friend);
  }
}