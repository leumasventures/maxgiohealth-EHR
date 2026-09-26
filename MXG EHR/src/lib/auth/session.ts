export interface SessionUser {
  id: string;
  name: string;
  email: string;
  role: string;
}

export function getStoredToken() {
  if (typeof window === "undefined") {
    return null;
  }

  return localStorage.getItem(
    "maxgiohealth_token"
  );
}

export function saveToken(token: string) {
  localStorage.setItem(
    "maxgiohealth_token",
    token
  );
}

export function removeToken() {
  localStorage.removeItem(
    "maxgiohealth_token"
  );
}