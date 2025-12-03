import { describe, test, expect, vi , it} from 'vitest';

import { extractValuesAtIndexes } from './extractValuesAtIndexes.js';

describe('extractValuesAtIndexes function', () => {
        test('should extract values from an array at the given indexes', () => {
                const sourceArray = ['a', 'b', 'c', 'd', 'e', 'f'];
                const indexList = [0, 2, 4];

                expect(extractValuesAtIndexes(sourceArray, indexList)).toEqual(['a', 'c', 'e']);
        });
});


import { fetchData } from './fetchData.js';

describe('fetchData function', () => {
        test('should fetch data from an API and return it as JSON', async () => {
                const data = await fetchData();

                expect(data).toBeDefined();
                expect(typeof data).toBe('string');
                expect(data).toBe("Data fetched successfully!");
        });
});

import { books } from './books.js';

describe('books array', () => {
        test('should filter books with more than 300 pages', () => {

                expect(books.filter(item => item.pages > 300)).toEqual([
                        { title: "book D", pages: 400 },
                        { title: "book D", pages: 380 }
                ]);
        });
});

import { filterArrayValues } from './filterArrayValues.js';

describe('filterArrayValues function', () => {
        test('should filter an array by removing specified values', () => {
                const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                const itemsToRemove = [2, 4, 6, 8];
                expect(filterArrayValues(numbersArray, itemsToRemove)).toEqual([1, 3, 5, 7, 9]);
        });
});


import { findMax } from './findMax.js';

describe('findMax function', () => {
        test('should find the maximum value in a negative number array', () => {
                const numbers = [-10, -3, -1, -7];
                expect(findMax(numbers)).toBe(-1);
        });
});

import { checkGuess } from './guessRandomNumber.js';

describe('checkGuess function', () => {
        test('should return "Good Work" when guessed number matches generated number', () => {
                const mathRandomMock = vi.spyOn(Math, 'random').mockReturnValue(0.4);
                expect(checkGuess(5)).toBe("Good Work");

                mathRandomMock.mockRestore();
        });

        test('should return "Not matched" when guessed number does not match generated number', () => {
                const mathRandomMock = vi.spyOn(Math, 'random').mockReturnValue(0.4);
                expect(checkGuess(3)).toBe("Not matched");

                mathRandomMock.mockRestore();
        });
});


import{isLowerCase} from './ isLowerCase.js';

describe('isLowerCase function', () => {
        test('should return true if the string is all lowercase', () => {
                expect(isLowerCase("hello")).toBe(true);
                expect(isLowerCase("world")).toBe(true);
        });

        test('should return false if the string contains uppercase letters', () => {
                expect(isLowerCase("Hello")).toBe(false);
                expect(isLowerCase("WoRld")).toBe(false);
        });
});


import { reversedStrings } from './map.js';

describe('reversedStrings function', () => {
        const stringArray = ["hello", "world", "umbrella"];
        test('should return an array with each string reversed', () => {
                expect(reversedStrings(stringArray)).toEqual(["olleh", "dlrow", "allerbmu"]);
        });
});


import { eulerNumber } from './eulers.js';

describe('eulerNumber function', () => {
    test("should return the value of Euler's number", () => {
        expect(eulerNumber).toBeCloseTo(2.7182);
    });
});

import { calculateMultiplicationAndDivision } from './calculateMultiplicationAndDivision.js';

describe('calculateMultiplicationAndDivision function', () => {
    test('should perform multiplication and division on two numbers', () => {
        expect(calculateMultiplicationAndDivision(10, 2)).toBe('Multiplication: 20\nDivision: 5');
    });

    test('should handle division by a number other than zero', () => {
        expect(calculateMultiplicationAndDivision(7, 3)).toBe('Multiplication: 21\nDivision: 2.3333333333333335');
    });
});

import { findLargestEvenNumber } from './findLargestEvenNumber.js';

describe('findLargestEvenNumber function', () => {
    test('should return the largest even number from an array', () => {
        const arrayOfInterger = [10, 5, 14, 3, 20];
        expect(findLargestEvenNumber(arrayOfInterger)).toBe(20);
    });

    test('should return null if there are no even numbers', () => {
        const numbers = [1, 3, 5, 7];
        expect(findLargestEvenNumber(numbers)).toBeNull();
    });
});

import { isSubsetObject } from './SubsetObject.js';

describe('isSubsetObject function', () => {
    test('should return true if subObject is subset of mainObject', () => {
        const mainObject = { name: "dema", age: 25, city: "paris" };
        const subObject = { age: 25 };
        expect(isSubsetObject(mainObject, subObject)).toBe(true);
    });

    test('should return false if subObject is not a subset of mainObject', () => {
        const mainObject = { name: "dema", age: 25, city: "paris" };
        const subObject = { age: 34, firstName: "junior" };
        expect(isSubsetObject(mainObject, subObject)).toBe(false);
    });
});

import { add } from './add.js';

describe('add function', () => {
    test('should add two numbers asynchronously', async () => {
        expect(await add(5, 10)).toBe(15);
    });

    test('should reject if one number is missing', async () => {
        await expect(add(5)).rejects.toBe("Must provide two numbers");
    });

    test('should reject if both numbers are missing', async () => {
        await expect(add()).rejects.toBe("Must provide two numbers");
    });
});


import{sumOfCubes} from './ sumOfCubes.js';

describe('sumOfCubes function', () => {
    test('should calculate the sum of cubes of first n numbers', () => {
        expect(sumOfCubes(5)).toBe(225); 
    });

    test('should return 0 when n is 0', () => {
        expect(sumOfCubes(0)).toBe(0);
    });
});

import { message } from './purchaseMessage.js';

describe('template function', () => {
    test('should generate the correct product description using template literals', () => {
        expect(message).toEqual('The total price for 3 items is 850, for a total sum of 6000');
    });
});

import{student} from './deleteroll.js';

describe('student object', () => {
    test('should remove rollNumber from the student object', () => {
        expect(student).toEqual({
            fullName: "David Rayy",
            className: "VI"
        });
    });
});


import { removeDuplicateCharacters } from './removeDuplicateCharacters.js';

describe('removeDuplicateCharacters function', () => {
    test('should remove duplicate characters from a string', () => {
       expect(removeDuplicateCharacters("programmation")).toEqual("pgtin");

    });
});


import { combineArrays } from './combineUniqueSorted.js';

describe('combineArrays function', () => {
        test('should combine two arrays, remove duplicates and sort them', () => {
                const array1 = [1, 2, 3, 4, 5];
                const array2 = [4, 5, 6, 7, 8];

                expect(combineArrays(array1, array2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
        });
});


import { Cylinder } from './cylinder.js';

describe('Cylinder class', () => {
  test('should calculate the volume of a cylinder given radius and height', () => {
    expect(new Cylinder(10, 20).getVolume()).toEqual("6283.1853");
  });
});

import { displayTime } from './startClock.js';

describe('displayTime function', () => {
        test('should return the current time in HH:MM:SS format', () => {
                const result = displayTime();

                expect(result).toMatch(/^\d{2}:\d{2}:\d{2}$/);
        });
});

import { daysUntilChristmas } from './daysUntilChristmas.js';

describe('daysUntilChristmas function', () => {
        test('should return the number of days until Christmas', () => {
                const mockDate = new Date('2025-12-01T00:00:00Z');
                expect(daysUntilChristmas(mockDate)).toEqual(24);
        });

        test('should handle dates after Christmas', () => {
                const mockDate = new Date('2025-12-26T00:00:00Z');
                expect(daysUntilChristmas(mockDate)).toEqual(365 - 1);
        });
});


import { findLongestString } from './findLongestString.js';

describe('findLongestString function', () => {
        test('should return the longest string from an array of strings', () => {
                expect(findLongestString()).toEqual("long string in the array");
        });
});

import { vehicle } from './car.js';

describe('vehicle object', () => {
        test('should have make, model, and year properties', () => {
                expect(vehicle).toEqual({
                        make: expect.any(String),
                        model: expect.any(String),
                        year: expect.any(Number)
                });
        });
});


import { calculateArea } from './calculateArea.js';

describe('calculateArea function', () => {
        test('should calculate area of a circle with radius 5', () => {
                expect(calculateArea(5)).toBeCloseTo(78.5398, 4);
        });
});


import { average } from './average.js'
describe('average function', () => {
        test('should calculates the average of the result rounded to two decimal places', () => {
                expect(average(89, 85, 78, 92)).toEqual(86);

        });
})
