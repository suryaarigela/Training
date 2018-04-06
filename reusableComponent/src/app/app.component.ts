import { Component } from '@angular/core';
import { Address } from './model/address';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  addressList:Address[]=[
    {
      name:'yogi',
      firstLine:'2010 Hassel Rd',
      secondLine:'Apt 308',
      postalCode:60169,
      telephone:6672283467,
      state:'Illinois'
    },
    {
      name:'Gopi',
      firstLine:'555 W madison',
      secondLine:'Apt 3808',
      postalCode:60505,
      telephone:74856890980,
      state:'Illinois'
    },
    {
      name:'karthik',
      firstLine:'2010 West drive',
      secondLine:'Apt 222',
      postalCode:76789,
      telephone:6878999098,
      state:'Florida'
    }
  ]

  removeme(address:Address){
   console.log('*****Removing******'+address.firstLine)
   let index= this.addressList.indexOf(address);
   console.log('Index is '+index )
  this.addressList.splice(index,1);
  console.log('list',this.addressList);
  }
}
