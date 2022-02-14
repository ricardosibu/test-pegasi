import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  
  formPerson: FormGroup;

  constructor(private fb: FormBuilder) {
   this.createPerson()
  }

  ngOnInit(): void {}

  get invalidName() {
    return this.formPerson.get('name')?.invalid && this.formPerson.get('name')?.touched;
  }

  get invalidSurname() {
    return this.formPerson.get('surname')?.invalid && this.formPerson.get('surname')?.touched;
  }

  get invalidAge() {
    return this.formPerson.get('age')?.invalid && this.formPerson.get('age')?.touched;
  }

  get invalidSex() {
    return this.formPerson.get('sex')?.invalid && this.formPerson.get('sex')?.touched;
  }

  get invalidPhone() {
    return this.formPerson.get('phone')?.invalid && this.formPerson.get('phone')?.touched;
  }

  createPerson() {
    this.formPerson = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      surname: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', Validators.required],
      sex: ['', Validators.required],
      pregnant: [''],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{3}-[0-9]{2}-[0-9]{3}')]]
      
    })
  }

  savePerson() {
    console.log(this.formPerson)

    if(this.formPerson.invalid) {
      return Object.values(this.formPerson.controls).forEach(control => {
        control.markAsTouched();
      })
    }
  }

}
