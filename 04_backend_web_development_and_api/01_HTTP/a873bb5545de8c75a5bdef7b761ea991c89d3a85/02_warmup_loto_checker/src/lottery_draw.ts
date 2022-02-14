import { Draw } from "./types";

export function lottery_draw(): Draw {
  const lotteryArray: Draw = [];
  for (let i = 0; i < 3; i++) {
    lotteryArray.push(Math.ceil(Math.random() * 3));
  }
  return lotteryArray;
}
