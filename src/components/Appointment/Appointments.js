import React, { useState, useEffect, useCallback } from "react";
import AppointmentList from "./AppointmentList";
import AppointmentFilter from "./AppointmentFilter";
import Card from "../../UI/Card";
import axios from "axios";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [filteredYear, setFilteredYear] = useState("2021");

  const onYearChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const fetchAppointments = useCallback(async () => {
    let url = process.env.REACT_APP_REALTIME_DATABASE + "appointments.json";

    try {
      const resp = await axios.get(url);

      let loadedAppointments = [];

      for (const key in resp["data"]) {
        loadedAppointments.push({
          id: key,
          userName: resp["data"][key].userName,
          userEmail: resp["data"][key].userEmail,
          userPhone: resp["data"][key].userPhone,
          apptDate: new Date(resp["data"][key].apptDate),
        });
      }

      console.log(loadedAppointments);
      setAppointments(loadedAppointments);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchAppointments();
  }, [fetchAppointments]);

  const filteredAppointments = appointments.filter(
    (appointment) =>
      appointment.apptDate.getFullYear().toString() === filteredYear
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
