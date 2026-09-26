import { useParams, Link } from "react-router-dom";

export default function PatientChartPage() {
  const { patientId } = useParams();
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Patient Chart</h1>
      <p className="text-slate-500">Patient ID: {patientId}</p>
      <Link to="/patients" className="text-teal-600 hover:underline">← Back to patients</Link>
    </div>
  );
}
