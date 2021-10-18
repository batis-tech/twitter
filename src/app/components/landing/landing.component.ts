import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SignupComponent } from "../../components/signup/signup.component";
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }


   openDialog(): void {
     const dialogRef = this.dialog.open(SignupComponent);

     dialogRef.afterClosed().subscribe(result => {
       console.log('The dialog was closed');

     });
   }

 }
