import React, { useEffect, useState } from "react";

export const Timer: React.FC = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setTime(time + 1);
    }, 1000),
      [time];
  });

  return <div>{time}</div>;
};
