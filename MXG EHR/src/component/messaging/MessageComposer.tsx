"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

interface Props {
  onSend: (message: string) => void;
}

export default function MessageComposer({
  onSend,
}: Props) {
  const [message, setMessage] = useState("");

  function send() {
    if (!message.trim()) return;

    onSend(message);

    setMessage("");
  }

  return (
    <div className="flex gap-3">
      <textarea
        value={message}
        onChange={(event) =>
          setMessage(event.target.value)
        }
        placeholder="Type a message..."
        rows={2}
        className="flex-1 rounded-lg border border-gray-300 p-3 text-sm"
      />

      <Button onClick={send}>
        Send
      </Button>
    </div>
  );
}