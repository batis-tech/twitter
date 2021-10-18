import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: NgForm[]=[];
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    console.log(form.value);
  }


}
