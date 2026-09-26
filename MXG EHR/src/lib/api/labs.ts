import { apiClient } from "./client";

export interface LabOrder {
  id: string;
  patientId: string;
  testName: string;
  status: string;
  orderedAt: string;
}

export async function getLabOrders(
  patientId?: string
) {
  const query = patientId
    ? `?patientId=${patientId}`
    : "";

  return apiClient<LabOrder[]>(
    `/labs/orders${query}`
  );
}

export async function createLabOrder(
  data: {
    patientId: string;
    testName: string;
  }
) {
  return apiClient<LabOrder>(
    "/labs/orders",
    {
      method: "POST",
      body: JSON.stringify(data),
    }
  );
}