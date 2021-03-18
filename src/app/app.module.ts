import { LessonsService } from './shared/services/lessons.service';
import { CoursesService } from './shared/services/courses.service';
import { CoursesComponent } from './courses/courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { CoursesDetailsComponent } from './courses/courses-details/courses-details.component';
import { LessonsListComponent } from './lessons/lessons-list/lessons-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    CoursesListComponent,
    CoursesDetailsComponent,
    LessonsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CoursesService,
    LessonsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
