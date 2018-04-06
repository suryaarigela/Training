import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Surya';
  twowayname='Angular'
  isDisplay:boolean =false;

    courses:string[];
    
   constructor(private service :MyserviceService){

   }
  callMe(){
   // let service=new ();
    this.courses=this.service.getCourses();
    console.log('Button clicked!!!!!')
  }


  submitForm(form){
   console.log('Submited value '+form.form.controls.firstName.value);
   console.log(form);
   console.log('angular is'+this.twowayname);
  }

  fieldChange(firstName:HTMLInputElement,form){
    console.log('first',firstName);
    console.log('*****',form);
    
  }
}
