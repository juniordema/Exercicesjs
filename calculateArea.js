
export const calculateArea = (circleRadius) => {
    if (circleRadius === undefined) {
        throw new Error("Radius is missing!");
    }
    return Math.PI * Math.pow(circleRadius, 2);
};

try {
    console.log(calculateArea(5));
    console.log(calculateArea());
} catch (errorMessage) {
    console.error(errorMessage.message);
}

