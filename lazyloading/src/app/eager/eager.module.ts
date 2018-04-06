import { NgModule } from '@angular/core';

import { EagerComponent } from './eager.component';
import { eagerrouting } from './eager.router';

@NgModule({
  imports: [eagerrouting],
  declarations: [EagerComponent]
})
export default class EagerModule {
    constructor(){
        console.log('Eager Moduke')
    }
}