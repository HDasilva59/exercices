import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Timer } from "./Timer";

const TimersList: React.FC = () => {
  const [timersList, setTimersList] = useState([""]);

  function deleteTimer(timer: string): void {
    const plop = timersList.filter((x) => x !== timer);
    setTimersList(plop);
  }

  return (
    <div>
      <button onClick={(): void => setTimersList([...timersList, uuidv4()])}>Add a Timer</button>
      <ul>
        {timersList.map((element) => (
          <li key={uuidv4()}>
            {<Timer />} <button onClick={(): void => deleteTimer(element)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimersList;
