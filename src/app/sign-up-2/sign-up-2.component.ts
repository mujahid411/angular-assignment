import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../services/signup.service';
import { User } from '../models/user.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up-2',
  standalone: true,
  templateUrl: './sign-up-2.component.html',
  styleUrls: ['./sign-up-2.component.css'],
  imports: [FormsModule,CommonModule]
})
export class SignUp2Component implements OnInit {
  user: User = {
    name: '',
    email: '',
    phone: '',
    password: '',
    organization: '',
    organizationId: '',
    designation: '',
    birthDate: '',
    city: '',
    pincode: ''
  };

  constructor(private signupService: SignupService, private router: Router) {}

  ngOnInit() {
    const savedData = this.signupService.getSignupData();
    if (savedData) {
      this.user = savedData;
    }
  }

  onSubmit() {
    // Save current data to the service
    this.signupService.setSignupData(this.user);
    console.log('User data saved:', this.signupService.getSignupData());

    // Navigate to the sign up success component
    this.router.navigate(['/solved']);
  }

  onBack() {
    // Save the current data before navigating back
    this.signupService.setSignupData(this.user);

    // Navigate back to the previous step
    this.router.navigate(['/signup']);
  }
}
