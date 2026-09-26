import { getPatient } from "@/lib/api/patients";
import { getEncounters } from "@/lib/api/encounters";
import { getMedications } from "@/lib/api/medications";

export async function getPatientChart(
  patientId: string
) {
  const [
    patient,
    encounters,
    medications,
  ] = await Promise.all([
    getPatient(patientId),
    getEncounters(patientId),
    getMedications(patientId),
  ]);

  return {
    patient,
    encounters,
    medications,
  };
}