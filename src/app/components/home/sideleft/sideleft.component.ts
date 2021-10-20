import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { DataService } from "../../../services/data.service";
import { TweetComponent } from "../../../components/home/tweet/tweet.component";
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-sideleft',
  templateUrl: './sideleft.component.html',
  styleUrls: ['./sideleft.component.scss']
})
export class SideleftComponent implements OnInit {
  newUser:Observable<any>;
  constructor(public afAuth: AngularFireAuth, private firestore: AngularFirestore,public dialog: MatDialog) {
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
 }

 openDialog() {
   this.dialog.open(TweetComponent, {
     data: {
       animal: 'panda'
     }
   });
 }





}
