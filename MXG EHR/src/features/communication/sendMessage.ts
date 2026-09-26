import { apiClient } from "@/lib/api/client";

export interface SendMessageInput {
  recipientId: string;
  subject?: string;
  message: string;
}

export async function sendMessage(
  data: SendMessageInput
) {
  if (!data.recipientId) {
    throw new Error(
      "Recipient is required."
    );
  }

  if (!data.message.trim()) {
    throw new Error(
      "Message cannot be empty."
    );
  }

  return apiClient(
    "/messages",
    {
      method: "POST",
      body: JSON.stringify(data),
    }
  );
}