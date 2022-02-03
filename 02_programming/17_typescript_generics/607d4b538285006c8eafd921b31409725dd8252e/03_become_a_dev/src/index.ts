type Human = {
  name: string;
  age: number;
  knowsDev: boolean;
};

type Dev =
Human & {
  knownLanguage : string;
}

function becomeADev (object: Human): Dev {
  const aNewDev= { knowsDev: true, knownLanguage: "JavaScript" };
  Object.assign(object, aNewDev);
  return object;
}

// Leave the line below for tests to work properly.
export { becomeADev };
