
export const combineArrays = (array1, array2) => {
    const mergedArray = [...array1, ...array2];
    const uniqueValues = [...new Set(mergedArray)];
    uniqueValues.sort((a, b) => a - b);
    return uniqueValues;
};

const firstArray = [1, 2, 3, 4, 5];
const secondArray = [4, 5, 6, 7, 8];

console.log(combineArrays(firstArray, secondArray));

