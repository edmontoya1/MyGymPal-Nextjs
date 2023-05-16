"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ISession } from "@/interfaces/Session.interface";
import SessionCard from "./SessionCard";

type Props = {};

const SessionsList = (props: Props) => {
  const [sessions, SetSessions] = useState<ISession[]>([]);

  useEffect(() => {
    async function getSessions() {
      try {
        const sessions = await axios.get(
          "http://localhost:8080/api/v1/sessions"
        );
        SetSessions(sessions.data);
      } catch (error) {
        console.log(error);
      }
    }
    getSessions();
  }, []);

  return (
    <div className="m-5 flex max-h-[40vh] flex-row justify-center overflow-y-scroll">
      {sessions.map((session) => (
        <SessionCard session={session} key={session.excercise} />
      ))}
    </div>
  );
};

export default SessionsList;
