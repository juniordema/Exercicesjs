
export const vehicle = {
    make: "toyota",
    model: "corolla",
    year: 2020
};

const { brand, modelName, year = "unknown" } = vehicle;

console.log(`Brand: ${brand}, Model: ${modelName}, Year: ${year}`);
