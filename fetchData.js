
const fectData = () => {
    return new Promise((resolve,) => {
        const delay = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, delay);
    });
}
fectData().then((message) => console.log(message));
