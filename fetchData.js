
export const fetchData = () => {
    return new Promise((resolve) => {
        const randomDelay = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, randomDelay);
    });
};

fetchData().then((resultMessage) => console.log(resultMessage));

