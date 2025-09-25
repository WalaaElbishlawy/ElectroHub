<<<<<<< HEAD
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Auth } from '../../Services/auth';
=======
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
>>>>>>> cfe63487fd06b2c2702019a4c9f6dcbaf7096945

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
<<<<<<< HEAD
  private auth = inject(Auth);
  private router = inject(Router);

  get isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
=======
>>>>>>> cfe63487fd06b2c2702019a4c9f6dcbaf7096945

}
