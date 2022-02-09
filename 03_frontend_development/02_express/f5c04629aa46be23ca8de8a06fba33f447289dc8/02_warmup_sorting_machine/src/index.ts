
export function sortingMachine(numArray:number[], sortingType:boolean):number[]{
if (sortingType === true){
  numArray.sort(function(a:number, b:number) {
    return a - b;
  });
  return numArray
}
else {
  numArray.sort(function(a, b) {
    return b - a;
  });
  return numArray
}
}
