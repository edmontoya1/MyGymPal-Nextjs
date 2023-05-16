import UsersList from "@/components/UsersList";
import Link from "next/link";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="">
      <UsersList />
      <div className="flex flex-row items-center justify-center">
        <div className="m-2 w-32 rounded-md bg-[#a9a9a9] p-2 text-center text-white">
          <Link href={"/users/create"}>Create User</Link>
        </div>
        <div className="m-2 w-32 rounded-md bg-[#a9a9a9] p-2 text-center text-white">
          <Link href={"/users/delete"}>Delete User</Link>
        </div>
        <div className="m-2 w-32 rounded-md bg-[#a9a9a9] p-2 text-center text-white">
          <Link href={"/"}>Back</Link>
        </div>
      </div>
    </div>
  );
};

export default page;
