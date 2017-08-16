import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DefaultApi} from '../app/shared/DefaultApi';

import {HttpModule,Http} from '@angular/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponents, AppRoutes } from "./app.routing";
const appRoutes:Routes = [
  { path:'',
    component: AppComponents
  },
  {
    path: 'page2',
    component: DashboardComponent
  },
  
]
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [DefaultApi,HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
 