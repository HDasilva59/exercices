export function line(numberOfStars: number): string {
  const starsArray = []
  for (let i = 0; i < numberOfStars; i++){
    starsArray.push("*")
  }
  return starsArray.join("")
}
