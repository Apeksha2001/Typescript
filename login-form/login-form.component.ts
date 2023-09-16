import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginStatus: string | null = null;

  constructor() { }

  ngOnInit(): void {

  }
  onLogin(username: any, password: any) {

    if (!username && !password) {
      this.loginStatus = 'Enter username and password.';
    }
    else if (!username) {
      this.loginStatus = 'Enter username.';
    }
    else if (!password) {

      this.loginStatus = 'Enter password.';

    } else if (username === 'Apeksha' && password === '1234') {
      
      this.loginStatus = 'Login successful';
    }
    else {
      this.loginStatus = 'Login failed. Invalid username or password.';
    }
  }

}
