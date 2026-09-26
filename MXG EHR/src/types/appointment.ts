export type MedicationStatus =
  | "ACTIVE"
  | "DISCONTINUED"
  | "COMPLETED";

export type Route =
  | "ORAL"
  | "IV"
  | "IM"
  | "TOPICAL"
  | "INHALATION"
  | "RECTAL"
  | "SUBLINGUAL"
  | "OTHER";

export interface Medication {
  id: string;

  name: string;
  genericName?: string;

  strength?: string;
  dosage?: string;
  frequency?: string;

  route?: Route;

  quantity?: number;
  refills?: number;

  status: MedicationStatus;

  startDate?: string;
  endDate?: string;

  instructions?: string;

  createdAt: string;
  updatedAt: string;
}

export interface PatientMedication {
  id: string;
  patientId: string;
  medicationId: string;

  medication: Medication;

  prescribedBy?: string;

  status: MedicationStatus;

  startDate?: string;
  endDate?: string;

  instructions?: string;
}

export interface CreateMedicationInput {
  patientId: string;
  name: string;
  genericName?: string;
  strength?: string;
  dosage?: string;
  frequency?: string;
  route?: Route;
  quantity?: number;
  refills?: number;
  instructions?: string;
}