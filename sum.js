
const sum = (n) => {
    return Array.from({ length: n }, (_, i) => i + 1) //create  an array 
        .filter(num => true)
        .reduce((somme, num) => somme + num ** 3, 0);
}
console.log(sum(5));
