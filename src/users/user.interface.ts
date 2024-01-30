// User interface
export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  address: string;
  city: string;
  state: string;
  country: string;
  phone_number: string;
  role: 'user' | 'admin';
}
