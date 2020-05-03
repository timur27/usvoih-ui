import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SpotComponent} from './spot/spot.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SpotService} from './spot/spot.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    SpotComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  providers: [
    SpotService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
