export default function DashboardPage() {
  const stats = [
    { title: "Total Patients", value: "2,450" },
    { title: "Today's Appointments", value: "42" },
    { title: "Today's Encounters", value: "18" },
    { title: "Pending Labs", value: "16" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Good morning, Dr. Smith</h1>
        <p className="text-slate-500">Clinical overview for today</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => (
          <div key={s.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">{s.title}</p>
            <p className="mt-1 text-3xl font-bold text-slate-900">{s.value}</p>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="mb-3 font-semibold">Today's Schedule</h2>
        <ul className="space-y-2 text-sm">
          <li className="flex justify-between border-b pb-2"><span>John Doe · Follow-up</span><span className="text-teal-600">09:00 AM</span></li>
          <li className="flex justify-between border-b pb-2"><span>Mary Johnson · Intake</span><span className="text-teal-600">10:30 AM</span></li>
          <li className="flex justify-between"><span>David Brown · Med Review</span><span className="text-teal-600">12:00 PM</span></li>
        </ul>
      </div>
    </div>
  );
}
