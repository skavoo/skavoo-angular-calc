import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DigitComponent } from './digit/digit.component';
import { OnReturnDirective } from './onreturn.directive';
import { OnReturn2Directive } from './onreturn2.directive';

@NgModule({
  declarations: [
    AppComponent,
    DigitComponent,
    OnReturnDirective,
    OnReturn2Directive
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
