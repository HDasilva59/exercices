import * as mongo from "mongodb";

export const sweaterProperties = {
  required: ["_id", "name", "color", "category", "size"],
  additionalProperties: false,
  properties: {
    _id: {
      bsonType: "objectId",
      description: "must be a objectId and is required",
    },
    name: {
      bsonType: "string",
      description: "must be a string < 30 characters and is required",
      maxLength: 30,
    },
    color: {
      bsonType: "string",
      description: "must be a string < 15 characters and is required",
      maxLength: 15,
    },
    category: {
      enum: ["sweater"],
      description: "must be an enu and requires",
    },
    size: {
      enum: ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"],
      desciption: "must be an enu and requires",
    },
  },
};

export const shoesProperties = {
  required: ["_id", "name", "color", "category", "size"],
  additionalProperties: false,
  properties: {
    _id: {
      bsonType: "objectId",
      description: "must be a objectId and is required",
    },
    name: {
      bsonType: "string",
      description: "must be a string < 30 characters and is required",
      maxLength: 30,
    },
    color: {
      bsonType: "string",
      description: "must be a string < 15 characters and is required",
      maxLength: 15,
    },
    category: {
      enum: ["shoes"],
      description: "must be an enu and requires",
    },
    size: {
      bsonType: "int",
      minimum: 30,
      maximum: 50,
    },
    material: {
      enum: ["leather", "textile", "synthetic"],
    },
  },
};

export const pantsProperties = {
  required: ["_id", "name", "color", "category", "size"],
  additionalProperties: false,
  properties: {
    _id: {
      bsonType: "objectId",
      description: "must be a objectId and is required",
    },
    name: {
      bsonType: "string",
      description: "must be a string < 30 characters and is required",
      maxLength: 30,
    },
    color: {
      bsonType: "string",
      description: "must be a string < 15 characters and is required",
      maxLength: 15,
    },
    category: {
      enum: ["pants"],
      description: "must be an enu and requires",
    },
    size: {
      bsonType: "object",
      required: ["width"],
      additionalProperties: false,
      properties: {
        width: {
          bsonType: "int",
          minimum: 32,
          maximum: 46,
        },
        cut: {
          enum: ["slim", "skinny", "regular", "straight"],
        },
      },
    },
  },
};

export const clothesValidator = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      oneOf: [pantsProperties, shoesProperties, sweaterProperties],
    },
  },
};

export function createClothesCollection(db: mongo.Db): Promise<mongo.Collection> {
  return db.createCollection("clothes", clothesValidator);
}
