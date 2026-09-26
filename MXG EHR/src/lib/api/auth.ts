import { apiClient } from "./client";

export interface LoginResponse {
  accessToken: string;

  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
}

export async function login(
  email: string,
  password: string
) {
  return apiClient<LoginResponse>(
    "/auth/login",
    {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );
}

export async function logout() {
  return apiClient("/auth/logout", {
    method: "POST",
  });
}

export async function getCurrentUser() {
  return apiClient("/auth/me");
}