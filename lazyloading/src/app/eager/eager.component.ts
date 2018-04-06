import { Component } from '@angular/core';

@Component({
  template: '<p>Eager Component</p>'
})
export class EagerComponent {
    constructor(){
        console.log('Eager Component')
    }
}