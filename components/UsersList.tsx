"use client";
import { IUser } from "@/interfaces/User.interface";
import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import Link from "next/link";

type Props = {};

const UsersList = (props: Props) => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const users = await axios.get("http://localhost:8080/api/v1/users");
        setUsers(users.data);
      } catch (error) {
        console.log(error);
      }
    }
    getUsers();
  }, []);

  return (
    <div className="m-5 flex max-h-[40vh] flex-row justify-center overflow-y-scroll">
      {users.map((user) => (
        <UserCard user={user} key={user.email} />
      ))}
    </div>
  );
};

export default UsersList;
