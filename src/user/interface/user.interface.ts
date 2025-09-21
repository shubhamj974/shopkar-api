export interface UserCreationAttrs {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phone?: string | null;
  password: string;
  roleId?: number | null;
  isActive?: boolean;
  emailVerified?: boolean;
}

