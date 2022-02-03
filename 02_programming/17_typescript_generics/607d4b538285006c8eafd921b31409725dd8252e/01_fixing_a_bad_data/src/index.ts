const receivedObject: ReceivedObject = {
  a: "somestring",
  b: 42,
};

type ReceivedObject = {
  a: string;
  b: number;
};

let createdArray: (number|string) [] = [];

function transformObject(receivedObject: ReceivedObject): (number|string) [] {
  createdArray = []
  createdArray.push(receivedObject.a);
  createdArray.push(receivedObject.b);
  return createdArray
}


// Leave the line below for tests to work properly.
export { transformObject };
