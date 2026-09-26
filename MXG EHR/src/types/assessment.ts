export type AppointmentStatus =
  | "SCHEDULED"
  | "CONFIRMED"
  | "CHECKED_IN"
  | "COMPLETED"
  | "CANCELLED"
  | "NO_SHOW";

export type AppointmentType =
  | "CONSULTATION"
  | "FOLLOW_UP"
  | "LAB"
  | "PROCEDURE"
  | "TELEHEALTH";

export interface Appointment {
  id: string;

  patientId: string;
  patientName?: string;

  providerId?: string;
  providerName?: string;

  date: string;
  startTime: string;
  endTime: string;

  type: AppointmentType;

  status: AppointmentStatus;

  reason?: string;
  notes?: string;

  createdAt: string;
  updatedAt: string;
}

export interface CreateAppointmentInput {
  patientId: string;
  providerId?: string;

  date: string;
  startTime: string;
  endTime: string;

  type: AppointmentType;

  reason?: string;
  notes?: string;
}