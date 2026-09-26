const patients = [
  {
    id: "MGH-000001",
    name: "John Doe",
    gender: "Male",
    age: 35,
    phone: "08012345678",
    status: "Active",
  },
  {
    id: "MGH-000002",
    name: "Mary Johnson",
    gender: "Female",
    age: 29,
    phone: "08023456789",
    status: "Active",
  },
  {
    id: "MGH-000003",
    name: "David Brown",
    gender: "Male",
    age: 47,
    phone: "08034567890",
    status: "Active",
  },
];

export default function PatientsPage() {
  return (
    <main className="p-6 bg-slate-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Patients</h1>
          <p className="text-slate-500">
            Manage patient records and medical information.
          </p>
        </div>

        <button className="bg-blue-600 text-white px-5 py-3 rounded-lg">
          + Register Patient
        </button>
      </div>

      <div className="bg-white rounded-xl border overflow-hidden">
        <div className="p-4 border-b">
          <input
            placeholder="Search patients..."
            className="w-full md:w-96 border rounded-lg px-4 py-3"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="text-left p-4">Patient ID</th>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Gender</th>
                <th className="text-left p-4">Age</th>
                <th className="text-left p-4">Phone</th>
                <th className="text-left p-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {patients.map((patient) => (
                <tr
                  key={patient.id}
                  className="border-t hover:bg-slate-50"
                >
                  <td className="p-4">{patient.id}</td>
                  <td className="p-4 font-medium">{patient.name}</td>
                  <td className="p-4">{patient.gender}</td>
                  <td className="p-4">{patient.age}</td>
                  <td className="p-4">{patient.phone}</td>
                  <td className="p-4">
                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs">
                      {patient.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}