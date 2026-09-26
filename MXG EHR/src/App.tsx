import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AppShell from "./components/layout/AppShell";

// Authentication
import LoginPage from "./pages/LoginPage";

// Main modules
import DashboardPage from "./pages/DashboardPage";
import PatientsPage from "./pages/PatientsPage";
import AppointmentsPage from "./pages/AppointmentsPage";
import CalendarPage from "./pages/CalendarPage";
import EncountersPage from "./pages/EncountersPage";
import NotesPage from "./pages/NotesPage";
import MedicationsPage from "./pages/MedicationsPage";
import PrescriptionsPage from "./pages/PrescriptionsPage";
import LabsPage from "./pages/LabsPage";
import DiagnosesPage from "./pages/DiagnosesPage";
import AssessmentsPage from "./pages/AssessmentsPage";
import TreatmentPlansPage from "./pages/TreatmentPlansPage";
import TelehealthPage from "./pages/TelehealthPage";
import MessagesPage from "./pages/MessagesPage";
import ReferralsPage from "./pages/ReferralsPage";
import DocumentsPage from "./pages/DocumentsPage";
import BillingPage from "./pages/BillingPage";
import ClaimsPage from "./pages/ClaimsPage";
import TasksPage from "./pages/TasksPage";
import ReportsPage from "./pages/ReportsPage";
import SettingsPage from "./pages/SettingsPage";
import AdminPage from "./pages/AdminPage";

// Patient chart
import PatientChartPage from "./pages/PatientChartPage";

function ProtectedRoutes() {
  return (
    <AppShell>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />

        <Route path="/patients" element={<PatientsPage />} />
        <Route
          path="/patients/:patientId"
          element={<PatientChartPage />}
        />

        <Route
          path="/appointments"
          element={<AppointmentsPage />}
        />

        <Route path="/calendar" element={<CalendarPage />} />

        <Route
          path="/encounters"
          element={<EncountersPage />}
        />

        <Route path="/notes" element={<NotesPage />} />

        <Route
          path="/medications"
          element={<MedicationsPage />}
        />

        <Route
          path="/prescriptions"
          element={<PrescriptionsPage />}
        />

        <Route path="/labs" element={<LabsPage />} />

        <Route
          path="/diagnoses"
          element={<DiagnosesPage />}
        />

        <Route
          path="/assessments"
          element={<AssessmentsPage />}
        />

        <Route
          path="/treatment-plans"
          element={<TreatmentPlansPage />}
        />

        <Route
          path="/telehealth"
          element={<TelehealthPage />}
        />

        <Route
          path="/messages"
          element={<MessagesPage />}
        />

        <Route
          path="/referrals"
          element={<ReferralsPage />}
        />

        <Route
          path="/documents"
          element={<DocumentsPage />}
        />

        <Route
          path="/billing"
          element={<BillingPage />}
        />

        <Route
          path="/claims"
          element={<ClaimsPage />}
        />

        <Route
          path="/tasks"
          element={<TasksPage />}
        />

        <Route
          path="/reports"
          element={<ReportsPage />}
        />

        <Route
          path="/settings"
          element={<SettingsPage />}
        />

        <Route
          path="/admin"
          element={<AdminPage />}
        />

        <Route
          path="*"
          element={<Navigate to="/dashboard" replace />}
        />
      </Routes>
    </AppShell>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<LoginPage />} />

        {/* Protected application */}
        <Route
          path="/*"
          element={<ProtectedRoutes />}
        />
      </Routes>
    </BrowserRouter>
  );
}

