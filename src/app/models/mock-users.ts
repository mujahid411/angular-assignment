import { User } from './user.model';

export const mockUsers: User[] = [
  {
    email: 'user1@example.com',
    phone: '1234567890',
    name: 'john',
    password: 'password1',
    organization: 'Org1',
    designation: 'Developer',
    birthDate: '1990-01-01',
    city: 'City1',
    pincode: '123456',
  },
  {
    email: 'user2@example.com',
    phone: '0987654321',
    name: 'David',
    password: 'password2',
    organization: 'Org2',
    designation: 'Manager',
    birthDate: '1985-05-05',
    city: 'City2',
    pincode: '654321',
  },
];
