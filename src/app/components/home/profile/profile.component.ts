import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { ForYou } from "../../../components/home/explore/homedata.model";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  newUser: Observable<any>;
  data: any;

  tweet: any[] = [];

  constructor(public afAuth: AngularFireAuth, private firestore: AngularFirestore) {

    this.newUser == null;
  }

  ngOnInit(): void {
    this.afAuth.authState.subscribe(newUser => {
      console.log('Dashboard: user', newUser);
      if (newUser) {
        let emailLower = newUser.email!.toLowerCase();
        this.newUser = this.firestore.collection('users').doc(emailLower).valueChanges();
        console.log(this.newUser);

      }
    });
    this.firestore.collection('tweets').valueChanges().subscribe(data => {
      this.tweet = data;
      console.log(this.tweet);
    })
  }

}
