import * as mongo from "mongodb";

export const booksValidator = {
  validator: {
    $jsonSchema: {
       bsonType: "object",
       required: [ "_id", "title", "author", "description" ],
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
          author: {
             bsonType: "string",
             description: "must be a string and is required"
          },
          description : {
             bsonType: "string",
             description: "must be a string < 101 characters",
             maxLength: 100
          },
       }
    }
 }
};

export function createBooksCollection(db: mongo.Db): Promise<mongo.Collection> {
  return db.createCollection("books", booksValidator);
}
