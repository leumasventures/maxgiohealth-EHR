export type Gender = "MALE" | "FEMALE" | "OTHER";

export type PatientStatus = "ACTIVE" | "INACTIVE" | "DECEASED";

export interface Patient {
  id: string;
  patientNumber: string;

  firstName: string;
  middleName?: string;
  lastName: string;

  dateOfBirth: string;
  gender: Gender;

  phone?: string;
  email?: string;
  address?: string;

  bloodGroup?: string;
  genotype?: string;

  emergencyContactName?: string;
  emergencyContactPhone?: string;
  emergencyContactRelationship?: string;

  allergies?: string[];

  status: PatientStatus;

  createdAt: string;
  updatedAt: string;
}

export interface PatientSummary {
  id: string;
  patientNumber: string;
  fullName: string;
  age: number;
  gender: Gender;
  phone?: string;
  bloodGroup?: string;
  genotype?: string;
  status: PatientStatus;
}

export interface CreatePatientInput {
  firstName: string;
  middleName?: string;
  lastName: string;
  dateOfBirth: string;
  gender: Gender;
  phone?: string;
  email?: string;
  address?: string;
  bloodGroup?: string;
  genotype?: string;
  emergencyContactName?: string;
  emergencyContactPhone?: string;
  emergencyContactRelationship?: string;
  allergies?: string[];
}

export type UpdatePatientInput = Partial<CreatePatientInput>;