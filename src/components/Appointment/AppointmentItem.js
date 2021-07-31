import React from "react";
import { useHistory } from "react-router-dom";

import AppointmentDate from "./AppointmentDate";
import Card from "../../UI/Card";

const AppointmentItem = (props) => {


  const history = useHistory();

  const startMeetingHandler = () => {

    history.push("/meeting");

  };

  return (
    <Card className="expense-item">
      <AppointmentDate date={props.apptDate} />
      <div>
        <p>{props.userName}</p>
        <p>{props.userEmail}</p>
        <p>{props.userPhone}</p>
        <button onClick={startMeetingHandler}>
          Start Meeting
        </button>
      </div>
    </Card>
  );
};

export default AppointmentItem;
