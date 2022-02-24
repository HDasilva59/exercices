export function humanPercentage(percentages: number[]):string[] {
  const result: string[] = []
  percentages.forEach(number => {const test = Math.round((number*100)).toString()
  result.push(`${test}%`)
  })
  return result
}
