"use client";
import axios from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const DeleteUserForm = (props: Props) => {
  const router = useRouter();
  async function deleteUser(formData: FormData) {
    await axios.delete(
      `http://localhost:8080/api/v1/users/delete/${formData.get("email")}`
    );
    router.replace("/users");
  }
  return (
    <form
      className="flex h-screen flex-col items-center justify-center gap-4 text-white"
      action={deleteUser}
    >
      <h2 className="mb-32">Delete User By Email</h2>
      <input
        type="email"
        name="email"
        id=""
        placeholder="Email..."
        className="border-b-2 bg-transparent text-white"
        required
      />
      <button type="submit" className="w-32 rounded-lg bg-red-500">
        Delete
      </button>
      <div className="mt-32 w-32 rounded-md bg-[#a9a9a9] p-2 text-center">
        <Link href={"/users"}>Back</Link>
      </div>
    </form>
  );
};

export default DeleteUserForm;
