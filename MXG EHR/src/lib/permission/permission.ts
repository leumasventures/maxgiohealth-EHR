export type UserRole =
  | "SUPER_ADMIN"
  | "ADMIN"
  | "DOCTOR"
  | "NURSE"
  | "PHARMACIST"
  | "LABORATORY"
  | "RECEPTIONIST"
  | "BILLING"
  | "PATIENT";

export type Permission =
  | "patients.read"
  | "patients.create"
  | "patients.update"
  | "patients.delete"
  | "encounters.read"
  | "encounters.create"
  | "notes.read"
  | "notes.create"
  | "medications.read"
  | "medications.create"
  | "appointments.read"
  | "appointments.create"
  | "billing.read"
  | "billing.create"
  | "reports.read"
  | "admin.manage";

const permissions: Record<
  UserRole,
  Permission[]
> = {
  SUPER_ADMIN: [
    "patients.read",
    "patients.create",
    "patients.update",
    "patients.delete",
    "encounters.read",
    "encounters.create",
    "notes.read",
    "notes.create",
    "medications.read",
    "medications.create",
    "appointments.read",
    "appointments.create",
    "billing.read",
    "billing.create",
    "reports.read",
    "admin.manage",
  ],

  ADMIN: [
    "patients.read",
    "patients.create",
    "patients.update",
    "encounters.read",
    "appointments.read",
    "appointments.create",
    "billing.read",
    "reports.read",
  ],

  DOCTOR: [
    "patients.read",
    "patients.update",
    "encounters.read",
    "encounters.create",
    "notes.read",
    "notes.create",
    "medications.read",
    "medications.create",
    "appointments.read",
    "appointments.create",
  ],

  NURSE: [
    "patients.read",
    "patients.update",
    "encounters.read",
    "notes.read",
    "notes.create",
    "medications.read",
    "appointments.read",
  ],

  PHARMACIST: [
    "patients.read",
    "medications.read",
    "medications.create",
  ],

  LABORATORY: [
    "patients.read",
    "encounters.read",
  ],

  RECEPTIONIST: [
    "patients.read",
    "patients.create",
    "patients.update",
    "appointments.read",
    "appointments.create",
  ],

  BILLING: [
    "patients.read",
    "billing.read",
    "billing.create",
  ],

  PATIENT: [
    "patients.read",
    "appointments.read",
    "medications.read",
  ],
};

export function hasPermission(
  role: UserRole,
  permission: Permission
) {
  return permissions[role]?.includes(permission) ?? false;
}

export function getPermissions(
  role: UserRole
) {
  return permissions[role] || [];
}