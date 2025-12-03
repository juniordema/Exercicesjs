export const removeDuplicateCharacters = (inputString) => {
    return inputString
        .split("")
        .filter(char => inputString.indexOf(char) === inputString.lastIndexOf(char))
        .join("");
};
