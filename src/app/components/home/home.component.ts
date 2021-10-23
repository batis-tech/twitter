import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { DataService } from "../../services/data.service";
import { Observable } from "rxjs";
import { Tweet } from "../../services/tweet.model";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tweet:any;
// Example: store the user's info here (Cloud Firestore: collection is 'users', docId is the user's email, lower case)
  constructor(private dataService: DataService,private afs: AngularFirestore, private afAuth:AngularFireAuth)  {

 }

 ngOnInit(): void {


 }


}
