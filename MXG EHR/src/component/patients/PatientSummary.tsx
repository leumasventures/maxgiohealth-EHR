import { Patient } from "@/types/patient";
import Card from "@/components/ui/Card";

interface Props {
  patient: Patient;
}

export default function PatientSummary({
  patient,
}: Props) {
  return (
    <Card title="Patient Information">
      <div className="grid gap-5 md:grid-cols-3">
        <Info
          label="Date of Birth"
          value={patient.dateOfBirth}
        />

        <Info
          label="Gender"
          value={patient.gender}
        />

        <Info
          label="Phone"
          value={patient.phone}
        />

        <Info
          label="Email"
          value={patient.email}
        />

        <Info
          label="Blood Group"
          value={patient.bloodGroup}
        />

        <Info
          label="Genotype"
          value={patient.genotype}
        />

        <Info
          label="Address"
          value={patient.address}
        />

        <Info
          label="Emergency Contact"
          value={patient.emergencyContactName}
        />

        <Info
          label="Emergency Phone"
          value={patient.emergencyContactPhone}
        />
      </div>
    </Card>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value?: string;
}) {
  return (
    <div>
      <p className="text-xs text-gray-500">{label}</p>

      <p className="mt-1 text-sm font-medium text-gray-900">
        {value || "Not recorded"}
      </p>
    </div>
  );
}