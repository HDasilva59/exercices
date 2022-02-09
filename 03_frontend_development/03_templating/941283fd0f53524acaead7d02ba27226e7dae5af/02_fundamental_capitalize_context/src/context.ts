import { capitalize } from "./capitalize"

export function context(sentence: string): string {
  const wordsArray:string[] = sentence.split(" ")
  const capitalizedWords:string[] = wordsArray.map(element => capitalize(element))
  return (capitalizedWords.join(" "))
}
