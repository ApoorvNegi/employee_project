import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/employ';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  faTimes = faTimes
  @Input() employees ?: Employee

  constructor() { }

  ngOnInit(): void {
  }

}
