"use client";

import Input from "@/components/ui/Input";

interface PatientSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function PatientSearch({
  value,
  onChange,
}: PatientSearchProps) {
  return (
    <Input
      placeholder="Search patients by name or patient number..."
      value={value}
      onChange={(event) =>
        onChange(event.target.value)
      }
    />
  );
}