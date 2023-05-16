import { ISession } from "@/interfaces/Session.interface";
import React from "react";

type Props = {
  session: ISession;
};

const SessionCard = (props: Props) => {
  console.log(props.session);
  return (
    <div className="m-10 w-64 rounded-md bg-[#e2e2e2] p-4">
      <h2 className="font-bold">Excercise:</h2>
      <p>{props.session.excercise}</p>
    </div>
  );
};

export default SessionCard;
