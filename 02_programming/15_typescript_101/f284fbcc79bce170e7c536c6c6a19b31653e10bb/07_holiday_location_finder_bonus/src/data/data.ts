const continents: Continent = ["Europe", "North America", "South America", "Asia", "Africa", "Oceania"];

type Continent = string[];

const cities: Cities = {
  Europe: [
    "Istanbul",
    "Moscow",
    "London",
    "Saint Petersburg",
    "Berlin",
    "Madrid",
    "Kyiv",
    "Rome",
    "Paris",
    "Bucharest",
    "Minsk",
    "Vienna",
    "Hamburg",
    "Warsaw",
    "Budapest",
    "Barcelona",
    "Munich",
    "Kharkiv",
    "Milan",
    "Porto",
  ],
  NorthAmerica: ["New York city", "Ottawa", "Montréal", "Los Angeles", "Mexico", "Washington"],
  SouthAmerica: ["Saint John’s", "Bogota", "Rio", "Caracas", "Santiago", "Havana"],
  Asia: ["Tokyo", "Osaka", "Beijing", "Sri Jayawardenapura Kotte", "Hanoï"],
  Africa: ["Sucre", "Rabat", "Alger", "Oran", "Casablanca"],
  Oceania: ["a","aa","aaa","aaaaa","aaaaaa","aaaaa","aaaaaaaa"],
};

type Cities = {
  [key: string]: string[];
};

// Leave the line below for tests to work properly.
export { continents, cities };
