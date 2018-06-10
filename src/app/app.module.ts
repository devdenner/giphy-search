import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { GiphySearchManualComponent } from './giphy/giphy-search-manual/giphy-search-manual.component';

@NgModule({
  declarations: [
    AppComponent,
    GiphySearchManualComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
