export const checkGuess = (guessedNumber) => {
    const generatedNumber = Math.floor(Math.random() * 10) + 1;

    if (guessedNumber === generatedNumber) {
        return "Good Work";
    } else {
        return "Not matched";
    }
};


