import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../Services/auth';

export const guestGuardGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth);
  const router = inject(Router);

  if (!auth.isLoggedIn()) return true;

  router.navigate(['/home']);
  return false;

};
