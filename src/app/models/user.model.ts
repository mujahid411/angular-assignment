// user schema
export interface User {
  email?: string;
  phone?: string;
  name: string;
  password: string;
  organization?: string;
  organizationId?:string;
  designation?: string;
  birthDate?: string;
  city?: string;
  pincode?: string;
}

