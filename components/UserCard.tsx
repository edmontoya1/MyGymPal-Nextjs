import { IUser } from "@/interfaces/User.interface";
import React from "react";

type Props = {
  user: IUser;
};

const UserCard = (props: Props) => {
  return (
    <div className="m-10 w-64 rounded-md bg-[#e2e2e2] p-4">
      <h2 className="font-bold">First Name:</h2>
      <p>{props.user.firstName}</p>
      <h2 className="font-bold">Last Name:</h2>
      <p>{props.user.lastName}</p>
      <h2 className="font-bold">Email:</h2>
      <p>{props.user.email}</p>
    </div>
  );
};

export default UserCard;
