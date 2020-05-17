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
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SpotDetailsComponent} from './spot/spot-details/spot-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SpotComponent,
    SpotDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSnackBarModule,
    NgbModule
  ],
  providers: [
    SpotService,
    SpotDetailsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
