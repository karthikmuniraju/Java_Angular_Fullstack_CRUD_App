import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeList } from './employee-list/employee-list';
import { CreateEmployee } from './create-employee/create-employee';
import { UpdateEmployee } from './update-employee/update-employee';
import { EmployeeDetails } from './employee-details/employee-details';

const routes: Routes = [
  {
    path: 'employees',
    component: EmployeeList,
    runGuardsAndResolvers: 'always',
  },
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'create-employee', component: CreateEmployee },
  { path: 'update-employee/:id', component: UpdateEmployee },
  { path: 'employee-details/:id', component: EmployeeDetails },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
