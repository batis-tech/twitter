import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
             // Example: store the user's info here (Cloud Firestore: collection is 'users', docId is the user's email, lower case)
  constructor()  {

 }

 ngOnInit(): void {}

}
