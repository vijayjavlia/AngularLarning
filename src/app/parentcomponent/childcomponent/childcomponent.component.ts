import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit {

  @Input() item=0;
  
  @Output() updatefromchildevent =new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
