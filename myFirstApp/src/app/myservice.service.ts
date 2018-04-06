
import {Http} from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MyserviceService {

  constructor(http:Http) { }

  getCourses():string[]{
    
    return ['Angular','java','node'];
  }

}
