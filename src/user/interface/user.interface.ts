export interface UserCreationAttrs {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  roleId: number;
  isActive?: boolean;
  emailVerified?: boolean;
}
