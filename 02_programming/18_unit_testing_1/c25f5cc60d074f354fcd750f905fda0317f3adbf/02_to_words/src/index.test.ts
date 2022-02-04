import { toWords } from "./index";

describe("", () => {
  const result = toWords("two words")
  test("two words should return an array containing two strings", () => {
    expect(result).toEqual(["two", "words"])
  });

  test("High-tech should split", () => {
    const result = toWords("High-tech product")
    expect(result).toEqual(["High-tech", "product"])
  });

  test("Hi:how are you ? sould split", () => {
    const result = toWords("Hi:how are you ?")
    expect(result).toEqual(["Hi","how", "are", "you", "?"])
  });

  test("spaceeeeeeeeeees", () => {
    const result = toWords("hello                 everyone")
    expect(result).toEqual(["hello", "everyone"])
  });

  test("every single things", () => {
    const result = toWords(".!, :")
    expect(result).toEqual([])

  })
});
