export function required(
  value: unknown,
  fieldName: string
) {
  if (
    value === undefined ||
    value === null ||
    String(value).trim() === ""
  ) {
    return `${fieldName} is required.`;
  }

  return null;
}

export function isValidEmail(
  email: string
) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    email
  );
}

export function isValidPhone(
  phone: string
) {
  return /^[+]?[0-9\s()-]{7,20}$/.test(
    phone
  );
}