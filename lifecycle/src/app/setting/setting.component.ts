import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  constructor() { }

  title:string='HERO'

  @ViewChild('homeComp') homeComp:HomeComponent;

  ngOnInit() {
    console.log('value '+this.homeComp.movie)
  }

}
