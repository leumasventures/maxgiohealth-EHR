import { apiClient } from "./client";
import {
  Appointment,
  CreateAppointmentInput,
} from "@/types/appointment";

export async function getAppointments() {
  return apiClient<Appointment[]>(
    "/appointments"
  );
}

export async function getAppointment(
  id: string
) {
  return apiClient<Appointment>(
    `/appointments/${id}`
  );
}

export async function createAppointment(
  data: CreateAppointmentInput
) {
  return apiClient<Appointment>(
    "/appointments",
    {
      method: "POST",
      body: JSON.stringify(data),
    }
  );
}

export async function cancelAppointment(
  id: string
) {
  return apiClient(
    `/appointments/${id}/cancel`,
    {
      method: "PATCH",
    }
  );
}