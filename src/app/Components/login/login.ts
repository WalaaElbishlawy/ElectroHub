import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  loginForm: FormGroup;
  submittedData: any = null;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group
      (
        {
          email: ['', [Validators.required, Validators.email, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          remember: [false]
        }
      )
  }

  resetForm() {
    this.loginForm.reset();
    this.submittedData = null;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.submittedData = this.loginForm.value;
      this.loginForm.reset();
    }
    else {
      this.loginForm.markAllAsTouched();
    }
  }

  get f() {
    return this.loginForm.controls;
  }
}
