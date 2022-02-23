import { Db } from "mongodb";

export function findManyCountries(db: Db) {
  return db.collection("worldAtlas")
  .find({ continent: "Europe" })
  .toArray()
  .then((docs) => {
    return docs;
  });
}
