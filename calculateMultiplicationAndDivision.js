const calculateMultiplicationAndDivision = () => {
    let firstNumber = parseFloat(console.log("Enter the first number"));
    let secondNumber = parseFloat(console.log("Enter the second number"));
    const multiplicationResult = firstNumber * secondNumber;
    const divisionResult = firstNumber / secondNumber;
    return ("Multiplication: " + multiplicationResult + "\nDivision: " + divisionResult);
};
