import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Timer } from "./Timer";

const TimersList: React.FC = () => {
  const timersArray: string[] = [];
  <Timer />;
  return (
    <div>
      <button onClick={() => timersArray.push(uuidv4())}>Add Timer</button>
      {console.log(test)}
    </div>
  );
};

export default TimersList;
