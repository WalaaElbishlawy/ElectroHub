import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  registerForm: FormGroup;
  submittedData: any = null;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group
      (
        {
          fullName: ['', [Validators.required, Validators.minLength(5)]],
          email: ['', [Validators.required, Validators.email, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
          mobile: ['', [Validators.required, Validators.pattern(/^\+?\d{10,15}$/)]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', [Validators.required]]
        },
        {
          validators: this.passwordMatchValidator
        }
      );
  }

  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirm = control.get('confirmPassword')?.value;
    return password === confirm ? null : { mismatch: true };

  }

  get f() {
    return this.registerForm.controls;
  }

  resetForm() {
    this.registerForm.reset();
    this.submittedData = null;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.submittedData = this.registerForm.value;
      this.registerForm.reset();
    }
    else {
      this.registerForm.markAllAsTouched();
    }
  }

}
