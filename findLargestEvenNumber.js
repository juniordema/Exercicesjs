
export const findLargestEvenNumber = (numbers) => {
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    if (evenNumbers.length === 0) {
        return null;
    }
    return Math.max(...evenNumbers);
};

const sampleNumbers = [10, 5, 14, 3, 20];
const largestEven = findLargestEvenNumber(sampleNumbers);

console.log("Largest even number:", largestEven);
