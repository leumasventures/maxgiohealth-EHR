"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import {
  AssessmentQuestion,
  AssessmentAnswer,
} from "@/types/assessment";

interface Props {
  questions: AssessmentQuestion[];

  onSubmit: (
    answers: AssessmentAnswer[]
  ) => void;
}

export default function AssessmentForm({
  questions,
  onSubmit,
}: Props) {
  const [answers, setAnswers] = useState<
    Record<string, string>
  >({});

  function updateAnswer(
    questionId: string,
    answer: string
  ) {
    setAnswers((current) => ({
      ...current,
      [questionId]: answer,
    }));
  }

  function handleSubmit() {
    const result: AssessmentAnswer[] =
      questions.map((question) => ({
        questionId: question.id,
        answer: answers[question.id] || "",
      }));

    onSubmit(result);
  }

  return (
    <div className="space-y-6 rounded-xl border border-gray-200 bg-white p-6">
      {questions.map((question, index) => (
        <div key={question.id}>
          <label className="mb-2 block text-sm font-medium">
            {index + 1}. {question.question}
          </label>

          {question.type === "SELECT" ? (
            <select
              value={answers[question.id] || ""}
              onChange={(event) =>
                updateAnswer(
                  question.id,
                  event.target.value
                )
              }
              className="w-full rounded-lg border border-gray-300 px-3 py-2"
            >
              <option value="">Select...</option>

              {question.options?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={
                question.type === "NUMBER"
                  ? "number"
                  : "text"
              }
              value={answers[question.id] || ""}
              onChange={(event) =>
                updateAnswer(
                  question.id,
                  event.target.value
                )
              }
              className="w-full rounded-lg border border-gray-300 px-3 py-2"
            />
          )}
        </div>
      ))}

      <Button onClick={handleSubmit}>
        Complete Assessment
      </Button>
    </div>
  );
}