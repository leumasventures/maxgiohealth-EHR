import {
  createInvoice,
} from "@/lib/api/billing";
import {
  CreateInvoiceInput,
} from "@/types/billing";

export async function createPatientInvoice(
  data: CreateInvoiceInput
) {
  if (!data.patientId) {
    throw new Error(
      "Patient is required."
    );
  }

  if (!data.items.length) {
    throw new Error(
      "Invoice must contain at least one item."
    );
  }

  return createInvoice(data);
}