import * as mongo from "mongodb";

export const moviesValidator = {
  validator: {
    $jsonSchema: {
       bsonType: "object",
       required: [ "_id", "title", "genre", "year" ],
       additionalProperties: false,
       properties: {
          _id: {
             bsonType: "objectId",
             description: "must be a objectId and is required"
          },
          title: {
             bsonType: "string",
             description: "must be a string and is required"
          },
          genre: {
            enum: [ "action", "comedy", "dramatic", "horror", "romance"],
             description: "can only be one of the enum values and is required"

          },
          year: {
             bsonType: "int",
             description: "must be a string < 101 characters",
             minimum: 1950,
             maximum: 2020,
          },
          ratings:{
            bsonType: "object",
            required: [ "pressRating", "spectatorsRating"],
            additionalProperties: false,
            properties: {
              pressRating: {
                bsonType: "int",
                minimum: 1,
                maximum: 5,
              },
              spectatorsRating: {
                bsonType: "int",
                minimum: 1,
                maximum: 5,
              },
            }
          },
       }
    }
 }
};

export function createMoviesCollection(
  db: mongo.Db
): Promise<mongo.Collection> {
  return db.createCollection("movies", moviesValidator);
}
