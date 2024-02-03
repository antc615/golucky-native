export interface RegistrationResponse {
  id: number;
  username: string;
  email: string;
}

export interface AuthResponse {
  refresh: string;
  access: string;
}

export interface ApiErrorResponse {
  detail: string;
}