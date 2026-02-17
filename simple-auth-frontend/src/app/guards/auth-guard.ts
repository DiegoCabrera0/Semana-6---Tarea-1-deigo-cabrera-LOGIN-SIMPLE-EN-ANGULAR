import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth';
import { map, catchError, of } from 'rxjs';

export const AuthGuard: CanActivateFn = () => {

  const auth = inject(AuthService);
  const router = inject(Router);

  return auth.getProfile().pipe(
    map(() => true),
    catchError(() => {
      localStorage.clear();
      router.navigate(['/']);
      return of(false);
    })
  );
};
