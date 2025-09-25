import { CommonModule } from '@angular/common';
<<<<<<< HEAD
<<<<<<< HEAD
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Auth } from '../../Services/auth';
=======
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
>>>>>>> cfe63487fd06b2c2702019a4c9f6dcbaf7096945
=======
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
>>>>>>> cfe63487fd06b2c2702019a4c9f6dcbaf7096945

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
<<<<<<< HEAD
<<<<<<< HEAD
export class Login implements OnInit{

  loginForm!: FormGroup;
  errorMessage = '';

  private authservice = inject(Auth);
  private fb = inject(FormBuilder);
  private router = inject(Router);

  ngOnInit(){
    this.loginForm = this.fb.group
     (
       {
         username: '',
         password: '',

       }
     )
  }

  onSubmit() {
    if (this.loginForm.invalid) {
       this.loginForm.markAllAsTouched();
       return;
      }

     const { username, password } = this.loginForm.value;

     this.authservice.login(username, password).subscribe({
        next:(response)=>{
          localStorage.setItem('token', response.accessToken);
          this.router.navigate(['/productSearch']);
        },
        error: () => {
        this.errorMessage = 'Invalid username or password';
        }
     });
=======
=======
>>>>>>> cfe63487fd06b2c2702019a4c9f6dcbaf7096945
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
<<<<<<< HEAD
>>>>>>> cfe63487fd06b2c2702019a4c9f6dcbaf7096945
=======
>>>>>>> cfe63487fd06b2c2702019a4c9f6dcbaf7096945
  }

  get f() {
    return this.loginForm.controls;
  }
}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cfe63487fd06b2c2702019a4c9f6dcbaf7096945
=======
>>>>>>> cfe63487fd06b2c2702019a4c9f6dcbaf7096945
