import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'  
})
export class SignupService {
  private signupData: User = {
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

  setSignupData(data: User) {
    this.signupData = { ...this.signupData, ...data };
  }

  getSignupData(): User {
    return this.signupData;
  }
}
