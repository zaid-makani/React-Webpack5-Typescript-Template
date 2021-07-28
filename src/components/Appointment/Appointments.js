import React, { useState } from "react";
import AppointmentList from "./AppointmentList";
import AppointmentFilter from "./AppointmentFilter";
import Card from "../../UI/Card";

const dummy_appointments = [
  {
    id: "1",
    date: new Date(2021, 10, 14, 18, 0, 0),
    participant: "Ramesh Kumar",
    participantID: "100",
    status: "pending",
  },
  {
    id: "2",
    date: new Date(2021, 11, 15, 18, 0, 0),
    participant: "Ravi Mehta",
    participantID: "101",
    status: "pending",
  },
];

const Appointments = () => {

  const [filteredYear, setFilteredYear] = useState('2021');

  const onYearChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };


  const filteredAppointments = dummy_appointments.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card>
      <AppointmentFilter
        selected={filteredYear}
        onYearChange={onYearChangeHandler}
      />
      <AppointmentList appointments={filteredAppointments} />
    </Card>
  );
};

export default Appointments;
