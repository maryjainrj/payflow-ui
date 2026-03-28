export interface AuthResponse {
  token: string;
  email: string;
  fullName: string;
}

export interface Payment {
  id: number;
  senderId: string;
  receiverId: string;
  amount: number;
  currency: string;
  status: 'PENDING' | 'COMPLETED' | 'FAILED';
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreatePaymentRequest {
  senderId: string;
  receiverId: string;
  amount: number;
  currency: string;
  description?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  fullName: string;
  email: string;
  password: string;
}