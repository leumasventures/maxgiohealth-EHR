import {
  createAppointment,
} from "@/lib/api/appointments";
import {
  CreateAppointmentInput,
} from "@/types/appointment";

export async function scheduleAppointment(
  data: CreateAppointmentInput
) {
  if (!data.patientId) {
    throw new Error(
      "Patient is required."
    );
  }

  if (!data.date) {
    throw new Error(
      "Appointment date is required."
    );
  }

  if (!data.startTime) {
    throw new Error(
      "Start time is required."
    );
  }

  if (!data.endTime) {
    throw new Error(
      "End time is required."
    );
  }

  return createAppointment(data);
}