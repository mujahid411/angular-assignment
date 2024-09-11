import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Mock user data
  private users = [
    { email: 'user1@example.com', phone: '1234567890' },
    { email: 'user2@example.com', phone: '0987654321' },
  ];

  constructor() {}

  // Check if user exists by email or phone
  checkUserExists(email: string, phone: string) {
    const user = this.users.find((u) => u.email === email || u.phone === phone);
    // Simulate an API call with delay and return observable
    return of(user).pipe(
      delay(500), // Simulate async call
      map((result) => !!result) // Return true if user exists, otherwise false
    );
  }
}
