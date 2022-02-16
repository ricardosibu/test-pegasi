import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  ageSelect: number[];
  validatePregnant: boolean = true;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private validate: ValidatorsService,
    private personServices: PersonsService
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

  getPregnant() {
    const sexValue = this.formPerson.get('sex').value;
    if (sexValue === 'male') {
      this.formPerson.get('pregnant').disable();
    } else {
      this.formPerson.get('pregnant').enable();
    }
  }

  sexSelected(value) {}

  createPerson() {
    this.formPerson = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      surname: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', Validators.required],
      sex: ['', Validators.required],
      pregnant: ['', Validators.nullValidator],
      phone: ['', [Validators.required]],
    });
  }

  setData() {
    this.person.name = this.formPerson.value.name;
    this.person.surname = this.formPerson.value.surname;
    this.person.age = this.formPerson.value.age;
    this.person.sex = this.formPerson.value.sex;
    this.person.pregnant = this.formPerson.value.pregnant
      ? this.formPerson.value.pregnant
      : false;
    this.person.phone = this.formPerson.value.phone;
  }

  savePerson() {
    try {
      this.personServices.createPerson(this.person).subscribe((response) => {
        const { _id } = response.person;
        this.router.navigate(['/welcome', _id]);
      });
    } catch (error) {}
  }

  saveData() {
    if (this.formPerson.invalid) {
      return Object.values(this.formPerson.controls).forEach((control) => {
        control.markAsTouched();
      });
    }

    this.setData();
    this.savePerson();
  }
}
