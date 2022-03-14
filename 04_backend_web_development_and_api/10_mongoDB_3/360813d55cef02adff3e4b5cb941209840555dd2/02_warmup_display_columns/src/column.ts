// export function column(numberOfLines: number, lineContent: string): string {
//   // const column = []
//   // for (let i = 0; i < numberOfLines; i++){
//   //   column.push(lineContent + "\n")
//   // }
//   // return column.join("")

//   return `${lineContent}\n`.repeat(numberOfLines)
// }


export const column = (numberOfLines: number, lineContent: string):string => `${lineContent}\n`.repeat(numberOfLines)
