import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee-service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-employee-list',
  standalone: false,
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList implements OnInit {
  employees: Employee[] = [];

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.getEmployees());
  }
  ngOnInit(): void {
    this.getEmployees();
  }
  private getEmployees() {
    this.employeeService.getEmployeList().subscribe({
      next: (data) => {
        this.employees = data;
      },
      error: (err) => {
        console.log('Error fetching employees:', err);
      },
    });
  }
  updateEmployee(id: number) {
    this.router.navigate(['update-employee', id]);
  }
  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe((data) => {
      console.log(data);
      window.location.href = '/employees';
      this.getEmployees();
    });
  }
  viewEmployeeDetails(id: number) {
    this.router.navigate(['employee-details', id]);
  }
}
