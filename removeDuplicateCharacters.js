
const removeDuplicateCharacters = (inputString) => {
    return inputString
        .split("")
        .filter((character, _, charactersArray) => charactersArray.indexOf(character) === charactersArray.lastIndexOf(character))
        .join("");
};

console.log(removeDuplicateCharacters("programmation"));
console.log(removeDuplicateCharacters("javascript"));
