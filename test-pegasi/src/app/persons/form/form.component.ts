import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { throws } from 'assert';
import { PersonModel } from 'src/app/models/person.model';
import { PersonsService } from 'src/app/services/persons.service';
import { ValidatorsService } from 'src/app/services/validators.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  formPerson: FormGroup;
  person = new PersonModel();

  constructor(
    private fb: FormBuilder,
    private validate: ValidatorsService,
    private personService: PersonsService
  ) {
    this.createPerson();
  }

  ngOnInit(): void {}

  get invalidName() {
    return (
      this.formPerson.get('name')?.invalid &&
      this.formPerson.get('name')?.touched
    );
  }

  get invalidSurname() {
    return (
      this.formPerson.get('surname')?.invalid &&
      this.formPerson.get('surname')?.touched
    );
  }

  get invalidAge() {
    return (
      this.formPerson.get('age')?.invalid && this.formPerson.get('age')?.touched
    );
  }

  get invalidSex() {
    return (
      this.formPerson.get('sex')?.invalid && this.formPerson.get('sex')?.touched
    );
  }

  get invalidPhone() {
    return (
      this.formPerson.get('phone')?.invalid &&
      this.formPerson.get('phone')?.touched
    );
  }

  validatePregnant() {}

  createPerson() {
    this.formPerson = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      surname: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', Validators.required],
      sex: ['', Validators.required],
      pregnant: ['', this.validate.noPregnant],
      phone: [
        '',
        [Validators.required, Validators.pattern('[0-9]{3}-[0-9]{2}-[0-9]{3}')],
      ],
    });
  }

  setData() {
    this.person.name = this.formPerson.value.name;
    this.person.surname = this.formPerson.value.surname;
    this.person.age = this.formPerson.value.age;
    this.person.sex = this.formPerson.value.sex;
    this.person.pregnant = this.formPerson.value.pregnant;
    this.person.phone = this.formPerson.value.phone;
  }

  savePerson() {
    this.personService.createPerson(this.person).subscribe(response => {
      console.log(response);
    })
  }

  saveData() {
    if (this.formPerson.invalid) {
      return Object.values(this.formPerson.controls).forEach((control) => {
        control.markAsTouched();
      });
    }

    this.setData();
    this.savePerson()
  }
}
