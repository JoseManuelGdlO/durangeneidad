import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  hidePassword = true;
  email: string = '';
  password: string = '';
  isLoading = false;

  constructor(private http: HttpClient, private router: Router) {}

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  get passwordIcon(): string {
    return this.hidePassword ? '../../../../../assets/eye-closed-svgrepo-com.svg' : '../../../../../assets/eye-open-svgrepo-com.svg';
  }

  login(): void {
    this.isLoading = true;
    const body = {
      email: this.email,
      password: this.password
    };

    this.http.post<any>('https://d2jj0rul8wm06l.cloudfront.net/durangeneidad/login', body).subscribe({
      next: (response) => {
        // Suponiendo que el token viene directamente en la respuesta
        // O ajusta según la estructura de tu respuesta, por ejemplo, response.data.token
        this.isLoading = false;
        localStorage.setItem('authToken', response.token);
        this.router.navigate(['/admin/home/articles']);
        // Aquí puedes redirigir al usuario o hacer otra acción tras el inicio de sesión exitoso
      },
      error: (error) => {
        console.error(error);
        this.isLoading = false;
        // Manejo de errores, como mostrar un mensaje de error al usuario
      }
    });
  }
}
