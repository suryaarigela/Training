import { Component, OnInit, SimpleChanges } from '@angular/core';
import { OnChanges, AfterContentInit, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-classic-component',
  templateUrl: './classic-component.component.html',
  styleUrls: ['./classic-component.component.css']
})
export class ClassicComponentComponent implements OnInit,OnChanges , AfterContentInit,OnDestroy{
  ngOnDestroy(): void {
    console.log('SimpleChanges');
  }
  ngAfterContentInit(): void {
    console.log('SimpleChanges');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('SimpleChanges');
  }

  constructor() {
    console.log('ClassicComponentComponent');
   }

  ngOnInit() {

  }

}
