import { CreatePatientInput } from "@/types/patient";

export function validatePatient(
  data: CreatePatientInput
) {
  const errors: Record<string, string> = {};

  if (!data.firstName.trim()) {
    errors.firstName =
      "First name is required.";
  }

  if (!data.lastName.trim()) {
    errors.lastName =
      "Last name is required.";
  }

  if (!data.dateOfBirth) {
    errors.dateOfBirth =
      "Date of birth is required.";
  }

  if (!data.gender) {
    errors.gender =
      "Gender is required.";
  }

  if (
    data.email &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      data.email
    )
  ) {
    errors.email = "Invalid email address.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}