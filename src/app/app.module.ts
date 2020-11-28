import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './comps/main/main.component';
import { TimetableComponent } from './comps/timetable/timetable.component';
import { HeaderComponent } from './comps/header/header.component';
import { FooterComponent } from './comps/footer/footer.component';
import { HomeComponent } from './comps/home/home.component';
import { ImpressumComponent } from './comps/impressum/impressum.component';
import { VideoComponent } from './comps/video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TimetableComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ImpressumComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
