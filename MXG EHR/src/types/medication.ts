export type EncounterType =
  | "OUTPATIENT"
  | "INPATIENT"
  | "EMERGENCY"
  | "TELEHEALTH"
  | "FOLLOW_UP";

export type EncounterStatus =
  | "SCHEDULED"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "CANCELLED";

export interface Encounter {
  id: string;
  patientId: string;

  providerId?: string;
  providerName?: string;

  type: EncounterType;
  status: EncounterStatus;

  date: string;
  chiefComplaint?: string;

  diagnosisIds?: string[];
  noteIds?: string[];

  createdAt: string;
  updatedAt: string;
}

export interface CreateEncounterInput {
  patientId: string;
  providerId?: string;
  type: EncounterType;
  date: string;
  chiefComplaint?: string;
}