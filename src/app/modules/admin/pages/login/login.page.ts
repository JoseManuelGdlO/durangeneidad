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

  constructor(private http: HttpClient, private router: Router) {}

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  get passwordIcon(): string {
    return this.hidePassword ? '../../../../../assets/eye-closed-svgrepo-com.svg' : '../../../../../assets/eye-open-svgrepo-com.svg';
  }

  login(): void {
    const body = {
      email: this.email,
      password: this.password
    };

    this.http.post<any>('http://3.218.160.237:8000/durangeneidad/login', body).subscribe({
      next: (response) => {
        console.log(response);
        // Suponiendo que el token viene directamente en la respuesta
        // O ajusta según la estructura de tu respuesta, por ejemplo, response.data.token
        localStorage.setItem('authToken', response.token);
        this.router.navigate(['/admin/post']);
        // Aquí puedes redirigir al usuario o hacer otra acción tras el inicio de sesión exitoso
      },
      error: (error) => {
        console.error(error);
        // Manejo de errores, como mostrar un mensaje de error al usuario
      }
    });
  }
}
