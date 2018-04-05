import {AbstractControl,ValidationErrors} from '@angular/forms';
export class NameValidator{

    static cannotContainSpaces(control:AbstractControl):ValidationErrors{
         if((control.value as string).indexOf(' ')>0){
             return {cannotContainSpaces : true} ;
         }
         return null;
    }

}