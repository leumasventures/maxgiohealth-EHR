import {
  createMedication,
} from "@/lib/api/medications";
import {
  CreateMedicationInput,
} from "@/types/medication";

export async function prescribeMedication(
  data: CreateMedicationInput
) {
  if (!data.patientId) {
    throw new Error(
      "Patient is required."
    );
  }

  if (!data.name) {
    throw new Error(
      "Medication name is required."
    );
  }

  return createMedication(data);
}