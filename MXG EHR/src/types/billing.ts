export type AssessmentStatus =
  | "DRAFT"
  | "COMPLETED"
  | "REVIEWED";

export interface AssessmentQuestion {
  id: string;
  question: string;
  type: "TEXT" | "NUMBER" | "BOOLEAN" | "SELECT";

  options?: string[];
}

export interface AssessmentAnswer {
  questionId: string;
  answer: string | number | boolean;
}

export interface Assessment {
  id: string;

  patientId: string;
  encounterId?: string;

  name: string;
  description?: string;

  status: AssessmentStatus;

  answers: AssessmentAnswer[];

  score?: number;

  completedBy?: string;
  completedAt?: string;

  createdAt: string;
  updatedAt: string;
}

export interface CreateAssessmentInput {
  patientId: string;
  encounterId?: string;

  name: string;
  description?: string;

  answers?: AssessmentAnswer[];
}