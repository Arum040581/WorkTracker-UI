import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'; //import home components
import { AboutComponent } from './about/about.component'; //import about component
import { ViewAllComponent } from './viewall/viewall.component'; //import viewall components
import { CreateComponent } from './create/create.component'; //import create components

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'viewall', component: ViewAllComponent },
   { path: 'create', component: CreateComponent },
  { path: '', component: HomeComponent, pathMatch: 'full'} // redirect to home page on load
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
