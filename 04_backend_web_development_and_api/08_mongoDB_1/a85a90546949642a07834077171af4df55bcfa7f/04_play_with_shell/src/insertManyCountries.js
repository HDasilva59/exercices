const countries = [
  {
  name: "Spain",
  capital: "Barcelone",
  continent: "Europe",
  },
  {
  name: "Sri Lanka",
  capital: "Sri Jayawardenepura Kotte",
  continent: "Asia",
  },
  {
  name:"Germany",
  capital:"Berlin",
  continent:"Europe"
  },
];
db.worldAtlas.insertMany(countries)
