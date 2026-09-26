"use client";

import { FormEvent } from "react";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import { CreatePatientInput } from "@/types/patient";

interface PatientFormProps {
  onSubmit: (data: CreatePatientInput) => void;
}

export default function PatientForm({
  onSubmit,
}: PatientFormProps) {
  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const data: CreatePatientInput = {
      firstName: String(formData.get("firstName")),
      middleName:
        String(formData.get("middleName")) || undefined,
      lastName: String(formData.get("lastName")),
      dateOfBirth: String(
        formData.get("dateOfBirth")
      ),
      gender: formData.get("gender") as
        | "MALE"
        | "FEMALE"
        | "OTHER",
      phone: String(formData.get("phone")) || undefined,
      email: String(formData.get("email")) || undefined,
      address:
        String(formData.get("address")) || undefined,
      bloodGroup:
        String(formData.get("bloodGroup")) || undefined,
      genotype:
        String(formData.get("genotype")) || undefined,
    };

    onSubmit(data);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-xl border border-gray-200 bg-white p-6"
    >
      <div>
        <h2 className="text-lg font-semibold">
          Register Patient
        </h2>

        <p className="text-sm text-gray-500">
          Enter the patient's demographic information.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Input
          name="firstName"
          label="First Name"
          required
        />

        <Input
          name="middleName"
          label="Middle Name"
        />

        <Input
          name="lastName"
          label="Last Name"
          required
        />

        <Input
          name="dateOfBirth"
          label="Date of Birth"
          type="date"
          required
        />

        <Select
          name="gender"
          label="Gender"
          required
          options={[
            { label: "Male", value: "MALE" },
            { label: "Female", value: "FEMALE" },
            { label: "Other", value: "OTHER" },
          ]}
        />

        <Input
          name="phone"
          label="Phone"
          type="tel"
        />

        <Input
          name="email"
          label="Email"
          type="email"
        />

        <Input
          name="bloodGroup"
          label="Blood Group"
        />

        <Input
          name="genotype"
          label="Genotype"
        />
      </div>

      <Input
        name="address"
        label="Address"
      />

      <Button type="submit">
        Register Patient
      </Button>
    </form>
  );
}