import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-leave-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './leave-form.component.html',
  styleUrls: ['./leave-form.component.css']
})
export class LeaveFormComponent implements OnInit {
 
  form!: FormGroup;
  leaveTypes = ['Sick Leave', 'Casual Leave', 'Earned Leave', 'Maternity Leave'];
  submitted = false;
  successMsg = '';
  errorMsg = '';
 
  constructor(private fb: FormBuilder) {}
 
  ngOnInit(): void {
    this.createForm();
  }
 
  createForm(): void {
    this.form = this.fb.group({
      employeeId: ['', Validators.required],
      employeeName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      leaveType: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      reason: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
 
  onSubmit(): void {
    this.successMsg = '';
    this.errorMsg = '';
 
    if (!this.form.valid) {
      this.errorMsg = 'Please fill all fields correctly';
      return;
    }
 
    const fromDate = new Date(this.form.get('fromDate')?.value);
    const toDate = new Date(this.form.get('toDate')?.value);
    if (toDate < fromDate) {
      this.errorMsg = 'To Date must be after From Date';
      return;
    }
 
    console.log('Leave form submitted:', this.form.value);
    this.successMsg = 'Leave application submitted successfully!';
    this.submitted = true;
 
    setTimeout(() => {
      this.form.reset();
      this.submitted = false;
      this.successMsg = '';
    }, 2000);
  }
 
  getError(field: string): string {
    const control = this.form.get(field);
    if (control?.hasError('required')) {
      return field + ' is required';
    }
    if (control?.hasError('minlength')) {
      return field + ' must be at least 10 characters';
    }
    if (control?.hasError('email')) {
      return 'Please enter a valid email address';
    }
    return '';
  }
}
