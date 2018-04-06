import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { approuting } from './app.router';
import { ClassicComponentComponent } from './classic-component/classic-component.component';
import { MyTrainingComponent } from './my-training/my-training.component';
import EagerModule from './eager/eager.module';



@NgModule({
  declarations: [
    AppComponent,
    ClassicComponentComponent,
    MyTrainingComponent
  ],
  imports: [
    BrowserModule,approuting,
    EagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log('App module')
  }
}



