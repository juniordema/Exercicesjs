
const extractValuesAtIndexes = (sourceArray, indexList) => {
    return indexList.map(idx => sourceArray[idx]);
};

const lettersArray = ['a', 'b', 'c', 'd', 'e', 'f'];
const selectedIndexes = [0, 2, 4];

console.log(extractValuesAtIndexes(lettersArray, selectedIndexes));
