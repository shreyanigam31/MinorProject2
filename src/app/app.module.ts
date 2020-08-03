import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PhoneBookHomeComponent } from './phone-book-home/phone-book-home.component';

import {PhoneService} from './phone-book-home/phoneService';
import {Contact} from './phone-book-home/contact';

@NgModule({
  declarations: [
    AppComponent,
    PhoneBookHomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [PhoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
