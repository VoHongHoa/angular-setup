import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  title = 'Tic Tac Toe';
  public isAuthenticated = false;
  
  public logout(): void {
    // todo
  }
}
