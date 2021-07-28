import React from 'react';
import AppointmentItem from "./AppointmentItem";

const AppointmentList = (props) => {

    if(props.appointments.length === 0){
        return <h2>There are no appointments to show.</h2>
    }

    return (
        <ul>
          {props.appointments.map((appointment) => (
            <AppointmentItem
              key={appointment.id}
              date={appointment.date}
              participant={appointment.participant}
              participantId={appointment.participantId}
              status={appointment.status}
            />
          ))}
        </ul>
      );

}

export default AppointmentList;