import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { NameValidator } from './nameValidator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  signupForm:FormGroup;
  ngOnInit() {
    this.signupForm=
    new FormGroup(
      {
      firstName:new FormControl('initial',[Validators.required,NameValidator.cannotContainSpaces,Validators.minLength(3)]),
      lastName:new FormControl('',[Validators.required,Validators.minLength(3)])
      }
  )
  }

  submitForm(){
    
    console.log(this.signupForm.get("firstName").value);
    console.log(this.signupForm.get("lastName").value);
  
 }

 get surya(){
   return this.signupForm.get('firstName');
 }

 get lastName(){
  return this.signupForm.get('lastName');
}
}
