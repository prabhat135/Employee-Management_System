import { Injectable } from '@angular/core';
 
export interface LeaveApp {
  employeeName: string;
  employeeId: string;
  email: string;
  leaveType: string;
  fromDate: string;
  toDate: string;
  reason: string;
  appliedDate?: Date;
  status?: string;
}
 
@Injectable({
  providedIn: 'root'
})
export class LeaveService {
 
  leaves: LeaveApp[] = [];
 
  constructor() { }
 
  submitLeave(leave: LeaveApp): void {
    const newLeave = { ...leave, appliedDate: new Date(), status: 'Pending' };
    this.leaves.push(newLeave);
    console.log('Leave submitted:', newLeave);
  }
 
  getLeaves(): LeaveApp[] {
    return this.leaves;
  }
}