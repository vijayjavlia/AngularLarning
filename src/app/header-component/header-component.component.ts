import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logoLink="https://cdnflags.dream11.com/d11-static-pages/images/D11-img.webp";

}
