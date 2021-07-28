import React from "react";
import AppointmentDate from "./AppointmentDate";
import Card from "../../UI/Card";

const AppointmentItem = (props) => {
  return (
    <Card className="expense-item">
      <AppointmentDate date={props.date} />
      <div>
        <p>{props.participant}</p>
        <p>{props.status}</p>
      </div>
    </Card>
  );
};

export default AppointmentItem;
