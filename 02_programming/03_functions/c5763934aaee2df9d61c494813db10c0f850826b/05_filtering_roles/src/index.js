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

const tab_t = [];
let i = 0;

function filteredRoles(list = persons, role = "Teacher") {
  // Code the function here.
  while (i <= list.length){
    if (list[i].role === "Teacher") {
      tab_t.push(list[i].name);
    }
  }
  return tab_t;
}

filteredRoles(persons, "Teacher");

// Do not remove lines below, it is for tests
module.exports = filteredRoles;
