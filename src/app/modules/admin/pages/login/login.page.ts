import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  hidePassword = true;

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  get passwordIcon(): string {
    return this.hidePassword ? '../../../../../assets/eye-closed-svgrepo-com.svg' : '../../../../../assets/eye-open-svgrepo-com.svg';
  }
}
