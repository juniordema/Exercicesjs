
export const vehicle = {
    brand: "toyota",
    modelName: "corolla"
};

const { brand, modelName, year = "unknown" } = vehicle;

console.log(`Brand: ${brand}, Model: ${modelName}, Year: ${year}`);
