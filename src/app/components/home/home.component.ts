import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { DataService } from "../../services/data.service";
import { Observable } from "rxjs";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private firestore: AngularFirestore,private dataService:DataService)  { }

  ngOnInit(): void {
  }
  logout(){
  this.dataService.logoutUser();
}

}
