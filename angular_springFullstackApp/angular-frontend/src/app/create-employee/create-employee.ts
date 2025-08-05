import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
// import { EmployeeService } from '../employee-service';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee-service';

@Component({
  selector: 'app-create-employee',
  standalone: false,
  templateUrl: './create-employee.html',
  styleUrl: './create-employee.css',
})
export class CreateEmployee implements OnInit {
  employee: Employee = new Employee();
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe(
      (data) => {
        console.log(data);
        this.goToEmployeeList();
      },
      (error) => console.log(error)
    );
  }

  goToEmployeeList() {
    window.location.href = '/employees';
  }

  onSubmit() {
    console.log(this.employee);
    this.saveEmployee();
  }
}
