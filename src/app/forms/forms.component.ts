import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
formdata:any = {};
  getLoginData(formdata:NgForm){
    // alert("Success");
    console.log(formdata)
    this.formdata=formdata;
  }
}
