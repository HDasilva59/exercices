export function rectangle(width: number, height: number): string {
  const rectangleArray = [];
  for (let i = 1; i< height+1; i++){
    const star = "*"
    rectangleArray.push(star.repeat(width))
  }
  const rectangle = rectangleArray.join("\n")
  return rectangle
}
