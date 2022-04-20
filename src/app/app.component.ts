import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning';
   arr=["hello","hi","how"]

   object=[
{name:"vijay",class:"btech",rollno:["hello","hi","how"]},
{name:"amit",class:"btech",rollno:["hello","hi","how"]}

   ]

  //  style Dynamic Binding
   color="green";

   clickChangeColor(){
   this.color="yellow";
   }

   display=true;

   toggle(){
     this.display=!this.display;
   }
}
