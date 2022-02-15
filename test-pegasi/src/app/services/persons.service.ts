import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { PersonModel } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  private URL_API = 'http://localhost:3000/api'
  

  constructor(private http: HttpClient) { }

  createPerson( person: PersonModel): Observable<any>{
    console.log(this.URL_API);
    return this.http.post(`${this.URL_API}/saveperson`, person);
  }

  getPerson(id: string): Observable<any> {
    return this.http.get(`${this.URL_API}//person/${id}`);
  }
}
