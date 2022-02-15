import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonModel } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  private url = 'http:localhost:5000/'

  constructor(private http: HttpClient) { }

  createPerson( person: PersonModel): Observable<PersonModel> {
    // return this.http.post(`${url}/`, person)
  }

  // getPerson ()
}
