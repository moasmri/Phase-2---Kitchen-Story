import { AuthService } from './../../services/AuthService/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}

// isLoggedIn!: boolean;

// constructor(private authService: AuthService) {
//   this.isLoggedIn = this.authService.isLoggedIn;
// }

// ngOnInit(): void {}
