
const sumOfCubes = (n) => {
    return Array.from({ length: n }, (_, index) => index + 1)
        .filter(number => true)
        .reduce((total, number) => total + number *3, 0);
};
console.log(sumOfCubes(5));

