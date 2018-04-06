import { Component, OnInit, SimpleChanges, Input } from '@angular/core';
import { AfterContentInit, OnDestroy, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterContentInit,OnDestroy,OnChanges,AfterContentChecked ,AfterViewInit,AfterViewChecked{
  
  @Input()
  myValue:string;
  
  movie:string='rangastalam';

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentchecked')
  }

  homeForm:FormGroup;
  ngOnChanges(changes: SimpleChanges): void {
   console.log('ngOnChanges ',changes)
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }

  constructor() { }

  ngOnInit() {
    console.log('this.myvalue '+this.myValue )
    this.homeForm=new FormGroup(
      {
        firstName:new FormControl(this.myValue,Validators.required)
      }
    )
    console.log('ngOnInit')
  }

}
