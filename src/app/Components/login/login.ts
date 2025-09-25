import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Auth } from '../../Services/auth';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
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
  }

  get f() {
    return this.loginForm.controls;
  }
}

