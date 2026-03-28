import api from './client';
import type { Payment, CreatePaymentRequest } from '../types';

export const getPayments = async (): Promise<Payment[]> => {
  const response = await api.get<Payment[]>('/payments');
  return response.data;
};

export const getPaymentById = async (id: number): Promise<Payment> => {
  const response = await api.get<Payment>(`/payments/${id}`);
  return response.data;
};

export const createPayment = async (data: CreatePaymentRequest): Promise<Payment> => {
  const response = await api.post<Payment>('/payments', data);
  return response.data;
};