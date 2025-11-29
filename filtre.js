
const filter = (arr, remove) => {
    return arr.filter(el => !remove.includes(el));
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const toremove = [2, 4, 6, 8];
console.log(filter(array, toremove));
  
