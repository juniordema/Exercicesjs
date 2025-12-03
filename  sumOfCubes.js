
export const sumOfCubes = (n) => {
    return Array.from({ length: n }, (_, index) => index + 1)
        .reduce((total, number) => total + number ** 3, 0);
};


