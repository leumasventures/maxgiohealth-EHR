import { apiClient } from "./client";
import {
  Medication,
  CreateMedicationInput,
} from "@/types/medication";

export async function getMedications(
  patientId: string
) {
  return apiClient<Medication[]>(
    `/patients/${patientId}/medications`
  );
}

export async function createMedication(
  data: CreateMedicationInput
) {
  return apiClient<Medication>(
    `/patients/${data.patientId}/medications`,
    {
      method: "POST",
      body: JSON.stringify(data),
    }
  );
}

export async function discontinueMedication(
  id: string
) {
  return apiClient(
    `/medications/${id}/discontinue`,
    {
      method: "PATCH",
    }
  );
}