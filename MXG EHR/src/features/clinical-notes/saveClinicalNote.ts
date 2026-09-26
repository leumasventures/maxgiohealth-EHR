import { apiClient } from "@/lib/api/client";

export interface ClinicalNoteInput {
  patientId: string;
  encounterId?: string;

  title: string;
  content: string;

  type:
    | "SOAP"
    | "PROGRESS"
    | "CONSULTATION"
    | "DISCHARGE"
    | "OTHER";
}

export async function saveClinicalNote(
  data: ClinicalNoteInput
) {
  return apiClient(
    "/notes",
    {
      method: "POST",
      body: JSON.stringify(data),
    }
  );
}