import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentcomponent',
  templateUrl: './parentcomponent.component.html',
  styleUrls: ['./parentcomponent.component.css']
})
export class ParentcomponentComponent implements OnInit {

  data:number=10;
  constructor() { }

  ngOnInit(): void {
  }


  updatefromchild(data:string){
    console.log(data)

  }
}
