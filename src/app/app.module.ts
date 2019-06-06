import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ResgisterComponentComponent } from './resgister-component/resgister-component.component';
import { MatchDirective } from './match.directive';

@NgModule({
  declarations: [AppComponent, ResgisterComponentComponent, MatchDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
