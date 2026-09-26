import { PatientSummary } from "@/types/patient";
import Badge from "@/components/ui/Badge";

interface PatientCardProps {
  patient: PatientSummary;
}

export default function PatientCard({
  patient,
}: PatientCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-gray-900">
            {patient.fullName}
          </h3>

          <p className="text-sm text-gray-500">
            {patient.patientNumber}
          </p>
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

      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <div>
          <p className="text-gray-500">Age</p>
          <p className="font-medium">{patient.age}</p>
        </div>

        <div>
          <p className="text-gray-500">Gender</p>
          <p className="font-medium">{patient.gender}</p>
        </div>

        <div>
          <p className="text-gray-500">Blood Group</p>
          <p className="font-medium">
            {patient.bloodGroup || "Not recorded"}
          </p>
        </div>

        <div>
          <p className="text-gray-500">Genotype</p>
          <p className="font-medium">
            {patient.genotype || "Not recorded"}
          </p>
        </div>
      </div>
    </div>
  );
}