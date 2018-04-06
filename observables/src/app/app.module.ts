import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { myRoutes } from './app.router';
import { PostsService } from './posts.service';
import { HttpModule } from '@angular/http';
import { DemoComponent } from './demo/demo.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,myRoutes,HttpModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
