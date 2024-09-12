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
  userExists: boolean | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    // Check if the user exists by email or phone
    this.authService
      .checkUserExists(this.email, this.phone)
      .subscribe((exists: boolean) => {
        this.userExists = exists;
        const queryParams: any = {};
        if (this.email) {
          queryParams.email = this.email;
        }
        if (this.phone) {
          queryParams.phone = this.phone;
        }

        if (exists) {
          // Navigate to login with queryParams if they exist
          this.router.navigate(['/login'], { queryParams });
        } else {
          // Navigate to signup with queryParams if they exist
          this.router.navigate(['/signup'], { queryParams });
        }
      });
  }
}
