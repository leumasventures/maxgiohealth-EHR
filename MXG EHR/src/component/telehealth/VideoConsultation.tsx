"use client";

import Button from "@/components/ui/Button";

interface Props {
  patientName: string;
  appointmentId: string;
}

export default function VideoConsultation({
  patientName,
  appointmentId,
}: Props) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <div className="mb-5">
        <h2 className="text-lg font-semibold">
          Telehealth Consultation
        </h2>

        <p className="text-sm text-gray-500">
          Patient: {patientName}
        </p>

        <p className="text-xs text-gray-400">
          Appointment: {appointmentId}
        </p>
      </div>

      <div className="flex aspect-video items-center justify-center rounded-xl bg-slate-900 text-white">
        <div className="text-center">
          <div className="mb-3 text-4xl">
            ◉
          </div>

          <p>Video consultation will appear here.</p>
        </div>
      </div>

      <div className="mt-5 flex gap-3">
        <Button>
          Start Consultation
        </Button>

        <Button variant="danger">
          End Consultation
        </Button>
      </div>
    </div>
  );
}