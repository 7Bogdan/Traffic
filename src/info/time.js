import { useState } from "react";

let formatDate= ()=>{
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear() % 100;
  let hour = date.getFullYear();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  if (day < 10) day = "0" + day;
  if (month < 10) month = "0" + month;
  if (year < 10) year = "0" + year;
  if (hour < 10) hour = "0" + hour;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  return (
    "It's " +
    day +
    "." +
    month +
    "." +
    year +
    " time now " +
    hour +
    ":" +
    minutes +
    ":" +
    seconds
  );
}

function Time() {
  let [timer, setTimer] = useState(formatDate());


  let tick = () => {
    setTimer(formatDate());
  };
  setInterval(tick, 1000);

  return <div className="time">{timer}</div>;
}

export default Time;
