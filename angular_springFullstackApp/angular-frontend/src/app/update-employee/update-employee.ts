import { Component, NgZone, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  standalone: false,
  templateUrl: './update-employee.html',
  styleUrl: './update-employee.css',
})
export class UpdateEmployee implements OnInit {
  id!: number;
  employee: Employee = new Employee();
  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
    private ngZone: NgZone
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id).subscribe(
      (data) => {
        this.employee = data;
      },
      (err) => console.log(err)
    );
  }
  updateEmployee() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe({
      next: (data) => {
        console.log(data);
        this.goToEmployeeList();
      },
      error: (err) => console.log(err),
    });
  }
  onSubmit() {
    this.updateEmployee();
  }
  goToEmployeeList() {
    this.ngZone.run(() => {
      window.location.href = '/employees';
    });
  }
}
