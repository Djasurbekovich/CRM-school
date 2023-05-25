import React, { useState } from "react";
import Sidenavbar from "../../Components/Sidenavbar/Sidenavbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import { Button, Input } from "antd";
import {
  FaExclamationTriangle,
  FaUserCheck,
  FaUserGraduate,
  FaUsers,
} from "react-icons/fa";
import "./Home.scss";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});
const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2023, 4, 18),
    end: new Date(2023, 4, 18),
  },
  {
    title: "Vacation",
    start: new Date(2023, 4, 19),
    end: new Date(2023, 4, 19),
  },
  {
    title: "Conference",
    start: new Date(2023, 4, 20),
    end: new Date(2023, 4, 20),
  },
];

const Home = () => {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent(e) {
    e.preventDefault();
    setAllEvents([...allEvents, newEvent]);
  }

  return (
    <div className="home__wrap">
      <Sidenavbar />
      <div className="home__calendar">
        <ul className="home__list">
          <li className="home__item">
            <div className="home__box">
              <FaUserCheck className="home__icon" />
              <p className="home__text">Faol lidlar</p>
            </div>
            <strong className="home__num">345</strong>
          </li>
          <li className="home__item">
            <div className="home__box">
              <FaUserGraduate className="home__icon" />
              <p className="home__text">Faol talabalar</p>
            </div>
            <strong className="home__num">236</strong>
          </li>
          <li className="home__item">
            <div className="home__box">
              <FaUsers className="home__icon" />
              <p className="home__text">Guruhlar</p>
            </div>
            <strong className="home__num">186</strong>
          </li>
          <li className="home__item">
            <div className="home__box">
              <FaExclamationTriangle className="home__icon" />
              <p className="home__text">Qarzdorlar</p>
            </div>
            <strong className="home__num">155</strong>
          </li>
        </ul>
        <h2 className="home__title">Add New Event</h2>
        <Input
          className="home__input"
          type="text"
          placeholder="Add title"
          value={newEvent.title}
          style={{ width: "25%" }}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <div className="home__dates">
          <DatePicker
            className="home__datepicker"
            placeholderText="Start Date"
            selected={newEvent.start}
            onChange={(start) => setNewEvent({ ...newEvent, start })}
          />
          <DatePicker
            className="home__datepicker"
            placeholderText="End Date"
            selected={newEvent.end}
            onChange={(end) => setNewEvent({ ...newEvent, end })}
          />
        </div>
        <Button className="home__btn" onClick={handleAddEvent}>
          Add Event
        </Button>
        <Calendar
          localizer={localizer}
          events={allEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
    </div>
  );
};

export default Home;
