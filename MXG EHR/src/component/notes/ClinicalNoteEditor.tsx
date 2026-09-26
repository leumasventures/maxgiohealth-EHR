"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

interface Props {
  onSave: (note: string) => void;
}

export default function ClinicalNoteEditor({
  onSave,
}: Props) {
  const [note, setNote] = useState("");

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <label className="mb-2 block text-sm font-medium">
        Clinical Note
      </label>

      <textarea
        value={note}
        onChange={(event) =>
          setNote(event.target.value)
        }
        rows={10}
        className="w-full rounded-lg border border-gray-300 p-3 text-sm outline-none focus:border-blue-500"
        placeholder="Enter clinical documentation..."
      />

      <div className="mt-4 flex justify-end">
        <Button
          onClick={() => onSave(note)}
          disabled={!note.trim()}
        >
          Save Note
        </Button>
      </div>
    </div>
  );
}