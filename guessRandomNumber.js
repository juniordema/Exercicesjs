const checkGuess = () => {
    const generatedNumber = Math.floor(Math.random() * 10) + 1;
    const guessedNumber = parseInt(console.log("Enter a number between 1 and 10"), 10);

    if (guessedNumber === generatedNumber) {
        return "Good Work";
    } else {
        return "Not matched";
    }
};


