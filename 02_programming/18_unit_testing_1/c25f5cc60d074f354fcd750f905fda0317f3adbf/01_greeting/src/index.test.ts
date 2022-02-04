import { greet } from "./index"

describe("Je suis sûr que ça arrive sur vos bdd donc coucou à vous les ami ! <3", () => {
  test("Nothing should return Hello WORLD!", () => {
    const result = greet()
    expect(result).toBe("Hello WORLD!")
  });

  test("Francis should return Hello FRANCIS!", () => {
    const result = greet("Francis")
    expect(result).toBe("Hello FRANCIS!")
  });
});
