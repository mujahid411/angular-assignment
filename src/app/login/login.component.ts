import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngIf
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = ''; // Stores the email value if passed
  phone: string = ''; // Stores the phone value if passed
  password: string = ''; // For the password input

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Read query parameters to determine whether email or phone was passed
    this.route.queryParams.subscribe((params) => {
      if (params['email']) {
        this.email = params['email'];
        console.log('email', this.email);
        // Pre-fill the email input
      } else if (params['phone']) {
        this.phone = params['phone']; // Pre-fill the phone input
      }
    });
  }

  onSubmit() {
    // Your login logic here
    console.log('Email:', this.email);
    console.log('Phone:', this.phone);
    console.log('Password:', this.password);
  }
}
