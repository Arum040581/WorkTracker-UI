import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { HomeComponent } from './home/home.component'; //import home components
import { AboutComponent } from './about/about.component'; //import about component
import { ViewAllComponent } from './viewall/viewall.component'; //import home components
import { CreateComponent } from './create/create.component'; //import create components
import { routing }  from './app.routing';
import { WrkCollectionsService } from "./services/wrkcollections.service";
import { WorkoutCategoryService } from "./services/workoutcategory.service";
import { CreateService } from "./services/create.service";

@NgModule({
  imports:      [ BrowserModule, routing,FormsModule,HttpModule ], //other modules the app depends on
  declarations: [ AppComponent, AboutComponent, HomeComponent,ViewAllComponent,CreateComponent ], // declare all derectives and components
  providers: [WrkCollectionsService,WorkoutCategoryService,CreateService],
  bootstrap : [ AppComponent ] // root component to bootstarp
})
export class AppModule { }