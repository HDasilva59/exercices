import { Customer } from "../data/customers";

export function filterByFirstLetter(customers:Customer[], letter:string):Customer[] {
  const filteredCustomers:Customer[] = []
  customers.forEach(person => {if (person.last_name.indexOf(letter) === 0){
    filteredCustomers.push(person)
  }})
  return filteredCustomers
}
