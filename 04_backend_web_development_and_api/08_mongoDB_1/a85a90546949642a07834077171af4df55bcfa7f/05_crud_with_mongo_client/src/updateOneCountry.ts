import { Db } from "mongodb";

export function updateOneCountry(db: Db) {
  return db.collection("worldAtlas")
  .updateOne({ name: "Australia" }, { $set: { capital: "Canberra" } })
  .then(() =>
      db.collection("worldAtlas")
        .findOne({ name: "Australia" })
        .then((doc) => {
          return doc;
        }),
    );
}
