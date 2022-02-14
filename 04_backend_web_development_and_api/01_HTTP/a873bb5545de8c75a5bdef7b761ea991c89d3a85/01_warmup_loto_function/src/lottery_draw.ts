type Draw = number[]

export function lottery_draw(): Draw {
  const lotteryArray: number[] = []
  for (let i = 0; i < 6; i++){
    lotteryArray.push(Math.ceil(Math.random()* (100 - 0) + 0))
  }
  return lotteryArray
}

