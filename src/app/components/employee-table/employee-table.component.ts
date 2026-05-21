import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService, Employee } from '../../services/employee.service';
 
@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {
 
  employees: Employee[] = [];
  loading = true;
 
  constructor(private service: EmployeeService) { }
 
  ngOnInit(): void {
    this.service.getEmployees().subscribe(data => {
      this.employees = data;
      this.loading = false;
    });
  }
}
