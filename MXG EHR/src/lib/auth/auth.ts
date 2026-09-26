import {
  getStoredToken,
  removeToken,
} from "./session";

export function isAuthenticated() {
  return Boolean(getStoredToken());
}

export function logoutUser() {
  removeToken();

  if (typeof window !== "undefined") {
    window.location.href = "/login";
  }
}