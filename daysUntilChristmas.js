export const daysUntilChristmas = () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    let christmasDate = new Date(currentYear, 11, 25);

    if (today > christmasDate) {
        christmasDate = new Date(currentYear + 1, 11, 25);
    }

    const differenceMs = christmasDate - today;
    const differenceInDays = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));

    return differenceInDays;
};
