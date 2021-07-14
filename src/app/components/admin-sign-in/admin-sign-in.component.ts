import { AuthService } from './../../services/AuthService/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-sign-in',
  templateUrl: './admin-sign-in.component.html',
  styleUrls: ['./admin-sign-in.component.scss'],
})
export class AdminSignInComponent implements OnInit {
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(loginInForm: any) {
    if (loginInForm.valid) {
      this.authService.login(
        loginInForm.value.email,
        loginInForm.value.password
      );

      this.router.navigate(['../../admin']);
    }
  }
}
