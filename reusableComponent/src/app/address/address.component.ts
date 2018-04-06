import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Address } from '../model/address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input()
  name:string;
  @Input()
  firstLine:string;
  @Input()
  secondLine:string;
  @Input()
  state:string;
  @Input()
  postalCode:number;

  @Input()
  telephone:number;

  @Output()
  emitter=new EventEmitter<Address>();
  constructor() { }

  ngOnInit() {
  }

  delete(){
    this.emitter.emit();
  }

}
