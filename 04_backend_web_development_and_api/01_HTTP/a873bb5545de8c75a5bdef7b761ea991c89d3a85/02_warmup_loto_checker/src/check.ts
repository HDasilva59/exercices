import { lottery_draw } from "./lottery_draw"
import { Draw } from "./types";

export function checkIfIWon(ticket: Draw): void {
  const lotteryArray = lottery_draw()
  if (ticket.join("") === lotteryArray.join("")){
    console.log("You won the lottery!")
  } else {
    console.log("You lost...")
  }
}

