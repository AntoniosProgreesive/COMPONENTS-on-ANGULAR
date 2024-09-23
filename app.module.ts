import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Εισαγωγή του FormsModule

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Προσθήκη FormsModule για να λειτουργεί το ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
