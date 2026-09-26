import { apiClient } from "@/lib/api/client";
import {
  AssessmentAnswer,
} from "@/types/assessment";

export async function submitAssessment(
  patientId: string,
  assessmentName: string,
  answers: AssessmentAnswer[]
) {
  return apiClient(
    "/assessments",
    {
      method: "POST",
      body: JSON.stringify({
        patientId,
        name: assessmentName,
        answers,
      }),
    }
  );
}