import { apiClient } from "./client";
import {
  Invoice,
  CreateInvoiceInput,
  Payment,
} from "@/types/billing";

export async function getInvoices(
  patientId?: string
) {
  const query = patientId
    ? `?patientId=${patientId}`
    : "";

  return apiClient<Invoice[]>(
    `/billing/invoices${query}`
  );
}

export async function getInvoice(
  id: string
) {
  return apiClient<Invoice>(
    `/billing/invoices/${id}`
  );
}

export async function createInvoice(
  data: CreateInvoiceInput
) {
  return apiClient<Invoice>(
    "/billing/invoices",
    {
      method: "POST",
      body: JSON.stringify(data),
    }
  );
}

export async function recordPayment(
  invoiceId: string,
  data: {
    amount: number;
    method: string;
    reference?: string;
  }
) {
  return apiClient<Payment>(
    `/billing/invoices/${invoiceId}/payments`,
    {
      method: "POST",
      body: JSON.stringify(data),
    }
  );
}