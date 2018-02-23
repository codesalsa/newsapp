import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { NewsdataService } from './services/newsdata.service';
import { NewsDetailsComponent } from './components/news-details/news-details.component';

const appRoutes: Routes = [
  {path: '', component:HomeComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [NewsdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
