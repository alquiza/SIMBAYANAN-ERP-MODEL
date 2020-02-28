import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Human } from 'src/app/models/human/human';
import { HumanService } from 'src/app/services/human/human.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read-human',
  templateUrl: './read-human.component.html',
  styleUrls: ['./read-human.component.scss']
})
export class ReadHumanComponent implements OnInit {

  employees: Observable<Human[]>;

  deleteButton = 'Delete';
  detailsButton = 'Details';

  constructor(
    private employeeService: HumanService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.getAllHuman();
  }

  employeeDetails(id: number) {
    this.router.navigate(['details-employee', id]);
  }

  employeeDelete(id: number) {
    this.employeeService.deleteHuman(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

}
