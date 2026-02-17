import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'http://localhost:5000/api/auth';

  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post<any>(`${this.apiUrl}/login`, data, { withCredentials: true })
      .pipe(
        tap(response => {
          localStorage.setItem('username', response.username);
        })
      );
  }

  logout() {
    localStorage.removeItem('username');
    return this.http.post(`${this.apiUrl}/logout`, {}, { withCredentials: true });
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('username');
  }

  // 🔹 NUEVO MÉTODO
  getProfile() {
    return this.http.get<any>(`${this.apiUrl}/profile`, { withCredentials: true });
  }
}
