import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ResgisterComponentComponent } from './resgister-component/resgister-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ResgisterComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
