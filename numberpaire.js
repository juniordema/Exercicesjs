
const even = (arr) => {
    const array = arr.filter(num => num % 2 === 0);
    if (array.length === 0) {
        return null;
    }
    return Math.max(...array);
}
const array = [10, 5, 14, 3, 20];
const len = even(array);
console.log("len number:", len);
