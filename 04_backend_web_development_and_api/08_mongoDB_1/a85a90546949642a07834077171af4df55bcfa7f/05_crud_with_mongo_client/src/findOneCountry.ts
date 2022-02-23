import { Db } from "mongodb";

export function findOneCountry(db: Db) {
  return db.collection("worldAtlas")
  .findOne({ name: "Iceland" })
  .then((doc) => {
    return doc
  });
}
