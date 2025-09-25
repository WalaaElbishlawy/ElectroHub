import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Auth } from '../../Services/auth';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  private auth = inject(Auth);
  private router = inject(Router);

  get isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

}
