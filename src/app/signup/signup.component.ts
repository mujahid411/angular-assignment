import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule], // Import FormsModule here since this is a standalone component
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'], // Corrected to styleUrls with an "s"
})
export class SignupComponent {
  email: string = ''; // Declare email property
  phone: string = ''; // Declare phone property
  password: string = ''; // Declare password property

  constructor() {}

  onSubmit() {
    // Your signup logic here
    console.log('Email:', this.email);
    console.log('Phone:', this.phone);
    console.log('Password:', this.password);
  }
}
