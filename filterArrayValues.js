export const filterArrayValues = (sourceArray, valuesToRemove) => {
    return sourceArray.filter(element => !valuesToRemove.includes(element));
};

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const itemsToRemove = [2, 4, 6, 8];

console.log(filterArrayValues(numbersArray, itemsToRemove));
  
