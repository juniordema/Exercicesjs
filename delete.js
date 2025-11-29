
const supprimerDoublons = (str) => {
    return str
        .split("")
        .filter((char, _, arr) => arr.indexOf(char) === arr.lastIndexOf(char))
        .join("")
}
console.log(supprimerDoublons("programmation"));
console.log(supprimerDoublons("javascript"));
