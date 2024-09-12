import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { mockUsers } from '../models/mock-users';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: User[] = mockUsers;  // Load mock user data

  constructor() {}

  // Check if user exists by email or phone
  checkUserExists(email?: string, phone?: string) {
    const user = this.users.find((u) => u.email === email || u.phone === phone);

    return of(user).pipe(
      delay(500),
      map((result) => !!result) // Return true if user exists, otherwise false
    );
  }

     // Fetch user by email or phone
  getUserByEmailOrPhone(email?: string, phone?: string) {
    const user = this.users.find((u) => u.email === email || u.phone === phone);
    return of(user).pipe(
      delay(500),
      map((result) => result || null)
    );  }

    // Validate user credentials by email/phone and password
    validateUser(email?: string, phone?: string, password?: string) {
      const user = this.users.find(
        (u) => (u.email === email || u.phone === phone) && u.password === password
      );
      return of(user).pipe(
        delay(500),
        map((result) => result || null)
      );
    }
}
