"use client";
import axios from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const CreateUserForm = (props: Props) => {
  const router = useRouter();
  async function setUser(formData: FormData) {
    const res = await axios.post("http://localhost:8080/api/v1/users", {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
    });
    router.replace("/users");
  }
  return (
    <form
      className="flex flex-col items-center justify-center gap-4"
      action={setUser}
    >
      <input
        type="text"
        name="firstName"
        id=""
        placeholder="First Name..."
        className="border-b-2 bg-transparent text-white"
        required
      />
      <input
        type="text"
        name="lastName"
        id=""
        placeholder="Last Name..."
        className="border-b-2 bg-transparent text-white"
        required
      />
      <input
        type="email"
        name="email"
        id=""
        placeholder="Email..."
        className="border-b-2 bg-transparent text-white"
        required
      />
      <button type="submit" className="w-32 rounded-lg bg-[#a9a9a9]">
        Create
      </button>
    </form>
  );
};

export default CreateUserForm;
