
const combineArray = (arr1, arr2) => {
    const combineArray = [...arr1, ...arr2];
    const uniqueArray = [...new Set(combineArray)];
    uniqueArray.sort((a, b) => a - b);
    return uniqueArray;
}
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];
console.log(combineArray(arr1, arr2));
