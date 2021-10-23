import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  users:any[]=[];
  constructor(public afAuth: AngularFireAuth, private firestore: AngularFirestore) {}
  ngOnInit(): void {
    this.firestore.collection('users').valueChanges().subscribe(data => {
      this.users = data;
      console.log(this.users);
    })
  }

}
