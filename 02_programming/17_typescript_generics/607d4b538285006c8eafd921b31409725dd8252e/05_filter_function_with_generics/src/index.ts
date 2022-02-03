function filterFor<ArrayValue, PredicateValue>(array: ArrayValue[], predicate: (element : ArrayValue) => PredicateValue): ArrayValue[] {
  const resultArray = [];

  for (const element of array) {
    if (predicate(element)) {
      resultArray.push(element)
    }
  }

  return resultArray;
}

export { filterFor }
