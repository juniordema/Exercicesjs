
const add = (a, b) => {
    return new Promise((resolve, reject) => {
        if (a === undefined || b === undefined) {
            reject("Must provide two numbers");
        } else {
            resolve(a + b);
        }
    });
}
add(5, 10)
    .then(result => console.log("result:", result))
add(5)
    .then(result => console.log("result:", result))
    .catch(error => console.log("error:", error));

