import { Component, OnInit } from '@angular/core';
import { PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private personServices: PersonsService) { }

  ngOnInit(): void {
  }

  getPerson(id) {
    if(id) {
      
      this.personServices.getPerson(id).subscribe((response) => {
        console.log(response);
      })
    }
  }

}
