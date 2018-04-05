import { Component, OnInit } from '@angular/core';
import { MyserviceServiceService } from '../myservice-service.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  ngOnInit(): void {
    
  }

  title = 'Surya';
  twowayname='Angular'
  isDisplay:boolean =false;

    courses:string[];
    
   constructor(private service :MyserviceServiceService){

   }
  callMe(){
   // let service=new ();
    //this.courses=this.service.getCourses();
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
