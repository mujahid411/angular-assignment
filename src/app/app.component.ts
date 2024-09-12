import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { UserEntryComponent } from './user-entry/user-entry.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { LoginSuccessfulComponent } from './login-successful/login-successful.component';
import { SolvedComponent } from './solved/solved.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserEntryComponent,LoginComponent,SignupComponent,FormsModule,NgIf,CommonModule,LoginSuccessfulComponent,SolvedComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  email: string = '';
  phone: string = '';
  userExists: boolean | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.checkUserExists(this.email, this.phone).subscribe((exists: boolean) => {
      this.userExists = exists;
    });
  }
}
