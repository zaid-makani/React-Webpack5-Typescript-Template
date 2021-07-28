import React from "react";

const AppointmentFilter = (props) => {
  const onChangeHandler = (event) => {
    props.onYearChange(event.target.value);
  };

  return (
    <div>
      <div>
        <label>Filter by year</label>
        <select value={props.selected} onChange={onChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default AppointmentFilter;
