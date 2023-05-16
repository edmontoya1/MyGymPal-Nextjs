import SessionsList from "@/components/SessionsList";
import Link from "next/link";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <SessionsList />
      <div className="flex flex-row items-center justify-center">
        <div className="m-2 w-32 rounded-md bg-[#a9a9a9] p-2 text-center">
          <Link href={"/sessions/create"}>Create Session</Link>
        </div>
        <div className="m-2 w-32 rounded-md bg-[#a9a9a9] p-2 text-center">
          <Link href={"/"}>Back</Link>
        </div>
      </div>
    </div>
  );
};

export default page;
