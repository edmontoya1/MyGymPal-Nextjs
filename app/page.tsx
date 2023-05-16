import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around text-white">
      <div className="w-80 rounded-lg bg-[#a9a9a9] p-5">
        <h2>MyGymPal</h2>
        <h3>CSCI-4830</h3>
        <h2>Introduction To Software Engineering</h2>
      </div>
      <div className="flex ">
        <div className="m-2 w-32 rounded-md bg-[#a9a9a9] p-2 text-center">
          <Link href={"/users"}>All Users</Link>
        </div>
        <div className="m-2 w-32 rounded-md bg-[#a9a9a9] p-2 text-center">
          <Link href={"/sessions"}>All Sessions</Link>
        </div>
      </div>
    </main>
  );
}
