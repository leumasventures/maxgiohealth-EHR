import { login } from "@/lib/api/auth";
import {
  saveToken,
} from "@/lib/auth/session";

export async function authenticateUser(
  email: string,
  password: string
) {
  const response = await login(
    email,
    password
  );

  saveToken(response.accessToken);

  return response.user;
}