import { Encounter } from "@/types/encounter";
import Badge from "@/components/ui/Badge";

interface Props {
  encounter: Encounter;
}

export default function EncounterCard({
  encounter,
}: Props) {
  const variant =
    encounter.status === "COMPLETED"
      ? "success"
      : encounter.status === "CANCELLED"
      ? "danger"
      : "info";

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <div className="flex justify-between">
        <div>
          <h3 className="font-semibold">
            {encounter.type.replace(/_/g, " ")}
          </h3>

          <p className="text-sm text-gray-500">
            {encounter.date}
          </p>
        </div>

        <Badge variant={variant}>
          {encounter.status}
        </Badge>
      </div>

      {encounter.chiefComplaint && (
        <p className="mt-4 text-sm text-gray-700">
          <strong>Chief Complaint:</strong>{" "}
          {encounter.chiefComplaint}
        </p>
      )}
    </div>
  );
}