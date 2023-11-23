import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const response: string = QueryProcessor("test");
        expect(typeof response).toBe("string");
    });

    test('Snoopy description', () => {
        const response: string = QueryProcessor("Who is Snoopy?");
        expect(response).toBe((
          "Snoopy is not your average beagle. He is a book lover and a book writer." + 
          "He is a collector of fine art and a root beer connoisseur." +
          "Plus, his unstoppable imagination helps keep his life anything but ordinary." + 
          "But no imaginary adventure matches a nap on his doghouse—and waking up to a well-deserved supper made especially for him by that Round-Headed Kid."
          ));
    });

    test('Garfield description', () => {
        const response: string = QueryProcessor("What does Garfield like to do?");
        expect(response).toBe((
          "Garfield's favorite daily activities involve eating (especially lasagna) and sleeping." +
          "He also loves to torment both his owner (the nerdy bachelor, Jon Arbuckle) and fellow pet (the loveable yellow beagle, Odie)." +
          "His closest companion is a stuffed teddy bear named Pooky and he has a vivid imagination (sometimes thinking he's a superhero)."
          ));
    });

    test('Name', () => {
      const response: string = QueryProcessor("What is your name?");
      expect(response).toBe((
          // TODO: ADD YOUR NAME HERE
          ""
        ));
    });

    test('Largest number', () => {
      const query = "Which of the following numbers is the largest: 48, 86, 51?";
      const response: string = QueryProcessor(query);
      expect(response).toBe((
          "86"
        ));
    });

    test('Add numbers', () => {
      expect(QueryProcessor("What is 5 plus 52?")).toEqual("57");
      expect(QueryProcessor("What is 12 plus 1?")).toEqual("13");
      expect(QueryProcessor("What is -34 plus 1?")).toEqual("-33");
    });

    test('Add numbers different format', () => {
      expect(QueryProcessor("What is 5 plus 2 plus 5?")).toEqual("12");
      expect(QueryProcessor("What is 7 plus 11 plus 28?")).toEqual("46");
      expect(QueryProcessor("What is 72 plus 72 plus 2004?")).toEqual("2148");
    });

    test('Find prime', () => {
      expect(QueryProcessor("Which of the following numbers are primes: 14, 12, 48, 2, 47?")).toEqual("47");
      expect(QueryProcessor("Which of the following numbers are primes: 12, 111, 42, 1949?")).toEqual("1949");
      expect(QueryProcessor("Which of the following numbers are primes: 3, 6, 8, 10?")).toEqual("3");
    });

    test('Subtract numbers', () => {
      expect(QueryProcessor("What is 5 minus 2?")).toEqual("3");
      expect(QueryProcessor("What is 407204 minus 101697?")).toEqual("305507");
      expect(QueryProcessor("What is 123 minus 321?")).toEqual("-198");
    });

    test('Multiply numbers', () => {
      expect(QueryProcessor("What is 5 multiplied by 5?")).toEqual("25");
      expect(QueryProcessor("What is 2 multiplied by 24?")).toEqual("48");
      expect(QueryProcessor("What is 41172 multiplied by 82872?")).toEqual("3412005984");
    });

    test('Square and cube', () => {
      expect(QueryProcessor("Which of the following numbers is both a square and a cube: 1302, 3784, 2401, 2211, 4096, 1, 448?")).toEqual("3784");
      expect(QueryProcessor("Which of the following numbers is both a square and a cube: 50, 234874, 4, 1111, 729, 3, 12321?")).toEqual("729");
      expect(QueryProcessor("Which of the following numbers is both a square and a cube: 828, 1172, 214, 4096, 543, 210, 1697?")).toEqual("4096");
    });

    test('Challenge', () => {
      expect(QueryProcessor("If Calvin has 5 apples and Hobbes has 16, how many do they have together?")).toEqual("Calvin and Hobbes have 20 apples");
      expect(QueryProcessor("If Linus has 20 apples and Lucy has 100, how many do they have together?")).toEqual("Linus and Lucy have 120 apples");
      expect(QueryProcessor("If Nermal has 7 apples and Liz has 4, how many do they have together?")).toEqual("Nermal and Liz have 11 apples");
    });
});