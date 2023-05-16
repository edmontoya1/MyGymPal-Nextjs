"use client";
import axios from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const CreateSessionForm = (props: Props) => {
  const router = useRouter();
  async function setSession(formData: FormData) {
    const res = await axios.post("http://localhost:8080/api/v1/sessions", {
      data: Date.now(),
      excercise: formData.get("exercise"),
    });
    router.replace("/sessions");
  }
  return (
    <form
      className="flex flex-col items-center justify-center gap-4"
      action={setSession}
    >
      <input
        type="text"
        name="exercise"
        id=""
        placeholder="Exercise Name..."
        className="border-b-2 bg-transparent text-white"
        required
      />

      <button type="submit" className="w-32 rounded-lg bg-[#a9a9a9]">
        Create
      </button>
    </form>
  );
};

export default CreateSessionForm;
