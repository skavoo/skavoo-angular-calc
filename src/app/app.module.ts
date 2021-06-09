import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

import { AppComponent } from './app.component';
import { DigitComponent } from './digit/digit.component';
import { ResultComponent } from './result/result.component';
import { OnReturnDirective } from './onreturn.directive';

@NgModule({
  declarations: [
    AppComponent,
    DigitComponent,
    ResultComponent,
    OnReturnDirective
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
