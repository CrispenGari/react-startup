import React, { useEffect, useState } from "react";
import { Header } from "../../components";
import "./Notifications.css";
import { Footer } from "../../components";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { NotificationsTwoTone } from "@material-ui/icons";
const Notifications = () => {
  const user = useSelector((state) => state.user);
  const [min, setMin] = useState(0);
  const [hrs, setHrs] = useState(0);

  const [day, setDay] = useState("");
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const history = useHistory();
  useEffect(() => {
    if (!user) {
      history.push("/");
    }
  }, [history, user]);

  useEffect(() => {
    const date = new Date();
    const intervalId = setInterval(() => {
      const m = date.getMinutes();

      const h = date.getHours();
      setMin(m);

      setHrs(h);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const date = new Date();
    const date_ = date.getDate();
    const day = date.getDay();
    const year = date.getFullYear();
    const month = date.getMonth();
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    setYear(year);
    setDay(days[day]);
    setDate(date_);
    setMonth(months[month]);
  }, []);
  return (
    <div className="notifications">
      <Header />
      <div className="notifications__main">
        <div className="notification__time">
          <h1>
            {String(hrs).length === 2 ? hrs : `0${hrs}`}:
            {String(min).length === 2 ? min : `0${min}`}
          </h1>
          <p>
            {day} {String(date).length === 2 ? date : `0${date}`} {month} {year}
          </p>
        </div>
        <NotificationsTwoTone className="notifications__icon" />
        <h1>
          Hi, {user?.displayName?.split(" ")[0]?.toUpperCase()} there are no new
          notifications!!
        </h1>
      </div>
      <Footer />
    </div>
  );
};

export default Notifications;
