import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeTableComponent } from './components/employee-table/employee-table.component';
import { LeaveFormComponent } from './components/leave-form/leave-form.component';
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, EmployeeTableComponent, LeaveFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Leave Management System';
}