import { apiClient } from "./client";
import {
  Patient,
  CreatePatientInput,
  UpdatePatientInput,
} from "@/types/patient";

export async function getPatients() {
  return apiClient<Patient[]>("/patients");
}

export async function getPatient(
  id: string
) {
  return apiClient<Patient>(
    `/patients/${id}`
  );
}

export async function createPatient(
  data: CreatePatientInput
) {
  return apiClient<Patient>("/patients", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function updatePatient(
  id: string,
  data: UpdatePatientInput
) {
  return apiClient<Patient>(
    `/patients/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(data),
    }
  );
}

export async function deletePatient(
  id: string
) {
  return apiClient(
    `/patients/${id}`,
    {
      method: "DELETE",
    }
  );
}