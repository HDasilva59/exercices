export function slotMachine (tuple:[string, string, string]):boolean{
  if (tuple[0] === tuple[1] && tuple[1] === tuple[2]){
    return true
  }
  return false
}
