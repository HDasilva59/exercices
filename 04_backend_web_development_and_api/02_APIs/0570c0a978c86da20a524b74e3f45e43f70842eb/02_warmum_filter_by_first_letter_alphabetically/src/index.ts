import { Customer } from "../data/customers";

export function filterByFirstLetterOrdered(customers:Customer[], letter:string):Customer[] {
  const filteredCustomers:Customer[] = []
  customers.forEach(person => {if (person.last_name.indexOf(letter) === 0){
    filteredCustomers.push(person)
  }})
  filteredCustomers.sort((a, b) => {
    if (a.last_name < b.last_name){
      return -1;
    }
    if(a.last_name > b.last_name){
      return 1;
    }
  return 0;})
  return filteredCustomers
}
