import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Bienvenido al Dashboard</h2>
    <p>Usuario logueado: {{username}}</p>
    <button (click)="logout()">Cerrar sesión</button>
  `
})
export class Dashboard {

  username = localStorage.getItem('username');

  constructor(private auth: AuthService, private router: Router) {}

  logout() {
    this.auth.logout().subscribe(() => {
      localStorage.clear();
      this.router.navigate(['/']);
    });
  }
}
