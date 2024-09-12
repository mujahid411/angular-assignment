import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  email: string = '';
  phone: string = '';
  password: string = '';
  name: string = ''

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Read query parameters to determine whether email or phone was passed
    this.route.queryParams.subscribe((params) => {
      if (params['email']) {
        this.email = params['email'];
        console.log('email', this.email);
      }
      if (params['phone']) {
        this.phone = params['phone'];
        console.log('phone', this.phone);
      }
    });
  }

  onSubmit() {
    console.log('Email:', this.email);
    console.log('Phone:', this.phone);
    console.log('Password:', this.password);

    // After processing the form data, navigate to Sign Up 2
    this.router.navigate(['/sign-up-2']);
  }
}
