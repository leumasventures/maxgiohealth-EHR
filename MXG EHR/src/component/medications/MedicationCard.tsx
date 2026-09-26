import { Medication } from "@/types/medication";
import Badge from "@/components/ui/Badge";

interface Props {
  medication: Medication;
}

export default function MedicationCard({
  medication,
}: Props) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <div className="flex justify-between">
        <div>
          <h3 className="font-semibold text-gray-900">
            {medication.name}
          </h3>

          {medication.genericName && (
            <p className="text-sm text-gray-500">
              {medication.genericName}
            </p>
          )}
        </div>

        <Badge
          variant={
            medication.status === "ACTIVE"
              ? "success"
              : "neutral"
          }
        >
          {medication.status}
        </Badge>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <div>
          <p className="text-gray-500">Strength</p>
          <p>{medication.strength || "-"}</p>
        </div>

        <div>
          <p className="text-gray-500">Dosage</p>
          <p>{medication.dosage || "-"}</p>
        </div>

        <div>
          <p className="text-gray-500">Frequency</p>
          <p>{medication.frequency || "-"}</p>
        </div>

        <div>
          <p className="text-gray-500">Route</p>
          <p>{medication.route || "-"}</p>
        </div>
      </div>

      {medication.instructions && (
        <p className="mt-4 text-sm text-gray-600">
          {medication.instructions}
        </p>
      )}
    </div>
  );
}