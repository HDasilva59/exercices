type ParamRest = string[];

export function greetEveryone(...stringarray: ParamRest): void {
  stringarray.forEach(element => console.log(`Welcome to ${element}`))
}
