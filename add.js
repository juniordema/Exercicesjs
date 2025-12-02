const add = (firstNumber, secondNumber) => {
    return new Promise((resolve, reject) => {
        if (firstNumber === undefined || secondNumber === undefined) {
            reject("Must provide two numbers");
        } else {
            resolve(firstNumber + secondNumber);
        }
    });
};

add(5, 10)
    .then(resultValue => console.log("result:", resultValue));

add(5)
    .then(resultValue => console.log("result:", resultValue))
    .catch(errorMessage => console.log("error:", errorMessage));

