import { apiClient } from "./client";
import {
  Encounter,
  CreateEncounterInput,
} from "@/types/encounter";

export async function getEncounters(
  patientId?: string
) {
  const query = patientId
    ? `?patientId=${patientId}`
    : "";

  return apiClient<Encounter[]>(
    `/encounters${query}`
  );
}

export async function getEncounter(
  id: string
) {
  return apiClient<Encounter>(
    `/encounters/${id}`
  );
}

export async function createEncounter(
  data: CreateEncounterInput
) {
  return apiClient<Encounter>(
    "/encounters",
    {
      method: "POST",
      body: JSON.stringify(data),
    }
  );
}