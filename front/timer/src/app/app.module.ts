import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {TimerComponent} from "./components/timer/timer.component";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {FlexLayoutModule} from "@angular/flex-layout";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "./material.module";
import {TimeService} from "./services/TimeService";
import {NewTrackComponent} from "./components/newTrack/newTrack.component";
import {TrackesListComponent} from "./components/trackersList/trackers.list.component";


@NgModule({
  declarations: [
      AppComponent,
      TimerComponent,
      NewTrackComponent,
      TrackesListComponent
  ],
  imports: [
    NoopAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [TimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
