const { TestWatcher } = require("jest");

const persons = [
  {
    name: "Florian",
    role: "Teacher",
  },
  {
    name: "Louis",
    role: "Teacher",
  },
  {
    name: "Guillaume",
    role: "Student",
  },
  {
    name: "Lucie",
    role: "Student",
  },
];

function filteredRoles(list = persons, personrole = "Teacher") {
  const filteredpersons = [];
  if (list[0].role === personrole){
    filteredpersons.push(list[0]);
  }
  if (list[1].role === personrole){
    filteredpersons.push(list[1]);
  }
  if (list[2].role === personrole){
    filteredpersons.push(list[2]);
  }
  if (list[3].role === personrole){
    filteredpersons.push(list[3]);
  }
  console.log(filteredpersons);
  return filteredpersons;
}

// Do not remove lines below, it is for tests
module.exports = filteredRoles;
