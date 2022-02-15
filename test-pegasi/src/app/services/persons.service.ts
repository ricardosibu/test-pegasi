import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonModel } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  private url = 'http:localhost:5000/'

  constructor(private http: HttpClient) { }

  createPerson( person: PersonModel) {
    // return this.http.post(`${url}/`)
  }
}
