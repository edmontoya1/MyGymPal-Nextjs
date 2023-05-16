import CreateUserForm from "@/components/CreateUserForm";
import Link from "next/link";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-4 text-white">
      <h2 className="mb-32">Create User</h2>
      <CreateUserForm />
      <div className="mt-32 w-32 rounded-md bg-[#a9a9a9] p-2 text-center">
        <Link href={"/users"}>Go Back</Link>
      </div>
    </div>
  );
};

export default page;
