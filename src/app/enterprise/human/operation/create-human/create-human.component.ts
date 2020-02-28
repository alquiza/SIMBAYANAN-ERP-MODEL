import { Component, OnInit } from '@angular/core';
import { HumanService } from '../../../../services/human/human.service';
import { Human } from 'src/app/models/human/human';
import { Router } from '@angular/router';
import { error } from 'protractor';

@Component({
  selector: 'app-create-human',
  templateUrl: './create-human.component.html',
  styleUrls: ['./create-human.component.scss']
})
export class CreateHumanComponent implements OnInit {

  employee: Human = new Employee();
  submitted = false;

  constructor(
    private employeeSerives: HumanService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    this.employeeSerives.createHuman(this.employee)
      .subscribe(cata => console.log(data), error => console.log(error));
    this.employee = new this.employee();
    this.gptoList();
  }
  
  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gptoList() {
    this.router.navigate(['employees'])
  }

}
