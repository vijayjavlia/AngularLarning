import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { NavItemsComponent } from './header-component/nav-items/nav-items.component';
import {FormsModule} from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';
import { ChildcomponentComponent } from './parentcomponent/childcomponent/childcomponent.component';
import { TwowaybindingcomponentComponent } from './twowaybindingcomponent/twowaybindingcomponent.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    NavItemsComponent,
    FormsComponent,
    ParentcomponentComponent,
    ChildcomponentComponent,
    TwowaybindingcomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
