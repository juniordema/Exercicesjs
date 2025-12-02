
export const stringArray = ["short string", "long string in the array", "medium string"];

export const findLongestString = (inputArray = stringArray) => {
    if (!Array.isArray(inputArray) || inputArray.length === 0) return "";
    return inputArray.reduce((longestString, currentString) =>
        currentString.length > longestString.length ? currentString : longestString
    );
};
