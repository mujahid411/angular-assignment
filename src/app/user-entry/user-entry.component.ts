import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-entry',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-entry.component.html',
  styleUrls: ['./user-entry.component.css'],
})
export class UserEntryComponent {
  email: string = '';
  phone: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService
      .checkUserExists(this.email, this.phone)
      .subscribe((userExists: boolean) => {
        if (userExists) {
          // Pass the email or phone as a query parameter when navigating to the login page
          const queryParams = this.email
            ? { email: this.email }
            : { phone: this.phone };
          this.router.navigate(['/login'], { queryParams });
        } else {
          this.router.navigate(['/signup']);
        }
      });
  }
}
