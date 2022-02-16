import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  fullName: string;
  constructor(private personServices: PersonsService, private route: ActivatedRoute) {
    this.fullName = '';
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        const idRegister = params['id'];
        if(idRegister) this.getPerson(params['id'])
      });
  }

  getPerson(id) {
      this.personServices.getPerson(id).subscribe((response) => {
        const { name, surname } = response.person;
        this.fullName = `${name} ${surname}`;

      });
  }
}
