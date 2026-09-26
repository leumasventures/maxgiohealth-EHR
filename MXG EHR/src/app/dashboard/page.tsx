const statistics = [
  {
    title: "Total Patients",
    value: "2,450",
    description: "Registered patients",
  },
  {
    title: "Today's Appointments",
    value: "42",
    description: "Scheduled today",
  },
  {
    title: "Today's Encounters",
    value: "87",
    description: "Patient visits",
  },
  {
    title: "Pending Lab Results",
    value: "16",
    description: "Awaiting results",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-100">
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Dashboard
          </h1>

          <p className="text-slate-500 mt-1">
            Welcome to MaxGioHealth Electronic Health Records.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {statistics.map((stat) => (
            <div
              key={stat.title}
              className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm"
            >
              <p className="text-sm text-slate-500">{stat.title}</p>

              <h2 className="text-3xl font-bold text-slate-900 mt-2">
                {stat.value}
              </h2>

              <p className="text-xs text-slate-400 mt-2">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <section className="bg-white rounded-xl border border-slate-200 p-6">
            <h2 className="font-semibold text-lg">
              Today's Appointments
            </h2>

            <div className="mt-5 space-y-4">
              {[
                ["09:00 AM", "John Doe", "Dr. Smith"],
                ["10:30 AM", "Mary Johnson", "Dr. Williams"],
                ["12:00 PM", "David Brown", "Dr. Smith"],
                ["02:30 PM", "Sarah Wilson", "Dr. Adams"],
              ].map(([time, patient, doctor]) => (
                <div
                  key={`${time}-${patient}`}
                  className="flex justify-between border-b pb-3 last:border-0"
                >
                  <div>
                    <p className="font-medium">{patient}</p>
                    <p className="text-sm text-slate-500">{doctor}</p>
                  </div>

                  <span className="text-sm text-blue-600">
                    {time}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-xl border border-slate-200 p-6">
            <h2 className="font-semibold text-lg">
              Recent Activities
            </h2>

            <div className="mt-5 space-y-4">
              <p className="text-sm text-slate-600">
                New patient registered — John Doe
              </p>

              <p className="text-sm text-slate-600">
                Laboratory result uploaded — Mary Johnson
              </p>

              <p className="text-sm text-slate-600">
                Prescription issued — David Brown
              </p>

              <p className="text-sm text-slate-600">
                Appointment completed — Sarah Wilson
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}