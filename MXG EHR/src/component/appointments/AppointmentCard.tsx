import { Appointment } from "@/types/appointment";
import Badge from "@/components/ui/Badge";

interface Props {
  appointment: Appointment;
}

export default function AppointmentCard({
  appointment,
}: Props) {
  const variant =
    appointment.status === "COMPLETED"
      ? "success"
      : appointment.status === "CANCELLED"
      ? "danger"
      : "info";

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <div className="flex justify-between">
        <div>
          <h3 className="font-semibold">
            {appointment.patientName ||
              "Patient"}
          </h3>

          <p className="text-sm text-gray-500">
            {appointment.type.replace(/_/g, " ")}
          </p>
        </div>

        <Badge variant={variant}>
          {appointment.status}
        </Badge>
      </div>

      <div className="mt-4 text-sm">
        <p>
          <strong>Date:</strong> {appointment.date}
        </p>

        <p>
          <strong>Time:</strong>{" "}
          {appointment.startTime} -{" "}
          {appointment.endTime}
        </p>

        {appointment.providerName && (
          <p>
            <strong>Provider:</strong>{" "}
            {appointment.providerName}
          </p>
        )}
      </div>
    </div>
  );
}