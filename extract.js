
const extract = (arr, indexes) => {
    return indexes.map(i => arr[i]);
}
const array = ['a', 'b', 'c', 'd,', 'e', 'f'];
const indexes = [0, 2, 4];
console.log(extract(array, indexes));
