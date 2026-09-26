import { Patient } from "@/types/patient";
import Badge from "@/components/ui/Badge";

interface Props {
  patient: Patient;
}

export default function PatientHeader({
  patient,
}: Props) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-700">
            {patient.firstName.charAt(0)}
            {patient.lastName.charAt(0)}
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {patient.firstName}{" "}
              {patient.middleName}{" "}
              {patient.lastName}
            </h1>

            <p className="text-sm text-gray-500">
              Patient ID: {patient.patientNumber}
            </p>
          </div>
        </div>

        <Badge
          variant={
            patient.status === "ACTIVE"
              ? "success"
              : "neutral"
          }
        >
          {patient.status}
        </Badge>
      </div>
    </div>
  );
}