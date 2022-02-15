import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  noPregnant(control: FormControl): {[s:string]: boolean} {
    if(control.value === 'male') {
      return {
        noPregnant: true
      }
    }

    return null;
    
  }
}
