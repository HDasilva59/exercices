let mockArray = [];
let mockObject = {};

beforeEach(() => {
  mockArray = [];
  mockObject = {};
});

describe("Let the tests on arrays begin !", () => {
  // The following arrays are a short list of "must watch" movies.
  // Write a test for each of them, respecting the conditions written in the requirements.
  // Be sure to always test if you test passes with the right conditions but also if
  // it does fail with the wrong conditions. Don't forget `expect.assertions`!

  // Here's an example:
  test("Should be a collection of 2 movies", () => {
    expect.assertions(1);

    mockArray = ["Into the wild", "Alien the 8th passenger"];

    expect(mockArray.length).toBe(2);
  });

  // Create a test that ensures that "Alien the 8th passenger" is present in mockArray.
  test("Alien the 8th passenger is present in mockArray", () => {
    expect.assertions(1);

    mockArray = ["Into the wild", "Alien the 8th passenger", "Ip Man", "Tombeau des lucioles", "fight club"];

    expect(mockArray).toContain("Alien the 8th passenger");
  });

  // Create a test that fails if "Indiana Jones 4" is present in mockArray.
  test("Shouldn't contain Indiana Jones 4", () => {
    expect.assertions(1);

    mockArray = ["Into the wild", "Alien the 8th passenger", "Ip Man", "Tombeau des lucioles", "fight club"];

    expect(mockArray).not.toContain("Indiana Jones 4");
  });

  // Create a test fails if the list has less than 5 elements.
  test("The list should at least 5 elements", () => {
    expect.assertions(1);

    mockArray = [
      "Lord of the rings : the return of the king",
      "Into the wild",
      "Alien the 8th passenger",
      "Tombeau des lucioles",
      "fight club",
    ];

    expect(mockArray.length).toBeGreaterThan(4);
  });

  // Create a test that checks if the array only contains String element.
  // Remember that a test is code, you are not limited to using `expect`
  test("Should only contain strings", () => {
    expect.assertions(1);

    mockArray = [
      "Lord of the rings : the return of the king",
      "Into the wild",
      "Alien the 8th passenger",
      "Tombeau des lucioles",
      "fight club",
    ];

    expect(mockArray.every((element) => typeof element === "string")).toBeTruthy();
  });

  // Create a test that passes if there's at least one film with "Lord of the rings" inside mockArray.
  test("should contain at least a Lord of the rings", () => {
    expect.assertions(1);
    mockArray = [
      "Lord of the rings : the return of the king",
      "Into the wild",
      "Alien the 8th passenger",
      "Tombeau des lucioles",
      "fight club",
    ];
    let result;
    mockArray.forEach((element) => {
      if (element.indexOf("Lord of the rings") !== -1) {
        return (result = true);
      }
      return false
    });
    expect(result).toEqual(true);
  });

  //Create a test that checks if the elements in mockArray respect that the strings are the same with the right order as solutionArray
  //eg : mockArray = ["Blue","Blue","Red", "Yellow"] would fail the test
  test("mockArray should be exactly the same as soltution array", () => {
    expect.assertions(1);
    mockArray = ["Blue", "Red", "Blue", "Yellow"];
    const solutionArray = ["Blue", "Red", "Blue", "Yellow"];
    console.log(mockArray === solutionArray)
    expect(mockArray).toEqual(expect.arrayContaining(solutionArray))
})});

describe("Let the tests on objects begin !", () => {
  // Create a test that ensures that your 'command' object contains at least `fries: true` and `sauce: "Hannibal"` without checking properties one by one
  // You should do it with only one assertion.
  // Hint: we want our mock object to _match_ another smaller object (look at the documentation!)
  const command = {
    fries: true,
    sauce : "Hannibal"
  },

  mockObject = {
    sauce: "Hannibal",
    fries: true,
    kebab: "Double",
    soda: "Sprite",
  };

  test("La sauce doit être moins bonne que Samouraï et la commande doit contenir des frittes", () => {
    expect.assertions(1)
    expect(mockObject).toMatchObject(command)
  })
});

//At the end, your file should contain 7 test (8 with the given example).
