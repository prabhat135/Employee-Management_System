import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 
export interface Employee {
  employeeId: string;
  employeeName: string;
  department: string;
  designation: string;
  email: string;
  contactNumber: string;
}
 
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
  constructor(private http: HttpClient) { }
 
  getEmployees(): Observable<Employee[]> {
    return this.http.get<{ employees: Employee[] }>('assets/data/employee.json')
      .pipe(map(res => res.employees));
  }
}