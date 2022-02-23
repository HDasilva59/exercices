import { Db } from "mongodb";

type Country = {
  name: string;
  capital: string;
  continent: string;
};

export function insertManyCountries(db: Db, country: Country[]) {
  return db.collection("worldAtlas")
    .insertMany(country)
    .then(() =>{
      return country.length}
    );
}
