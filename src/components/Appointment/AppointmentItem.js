import React from "react";
import AppointmentDate from "./AppointmentDate";
import Card from "../../UI/Card";

const AppointmentItem = (props) => {
  return (
    <Card className="expense-item">
      <AppointmentDate date={props.apptDate} />
      <div>
        <p>{props.userName}</p>
        <p>{props.userEmail}</p>
        <p>{props.userPhone}</p>
      </div>
    </Card>
  );
};

export default AppointmentItem;