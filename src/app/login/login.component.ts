import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  phone: string = '';
  password: string = '';
  userName: string = '';
  errorMessage: string = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService // Inject the AuthService
  ) {}

  ngOnInit() {
    // Read query parameters to determine whether email or phone was passed
    this.route.queryParams.subscribe((params) => {
      if (params['email']) {
        this.email = params['email'];
        this.fetchUserName();
      } else if (params['phone']) {
        this.phone = params['phone'];
        this.fetchUserName();
      }
    });
  }

  fetchUserName() {
    // Fetch the user's name based on email or phone
    this.authService.getUserByEmailOrPhone(this.email, this.phone).subscribe((user: User | null) => {
      if (user) {
        this.userName = user.name;
      } else {
        this.userName = '';
        this.errorMessage = 'User not found.';
      }
    });
  }
  onSubmit() {
    // Check if email or phone is provided
    if (!this.email && !this.phone) {
      this.errorMessage = 'Please provide either an email or phone number';
      return;
    }

    // Call AuthService to validate the user with email/phone and password
    this.authService.validateUser(this.email, this.phone, this.password).subscribe((user: User | null) => {
      if (user) {
        // Navigate to login success page (or handle further logic as required)
        this.router.navigate(['/login-successful']);
      } else {
        // error message if validation fails
        this.errorMessage = 'Invalid password. Please try again.';
      }
    });
  }
}
