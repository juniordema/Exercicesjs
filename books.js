
export const books = [
    { title: "book A", pages: 150 },
    { title: "book B", pages: 300 },
    { title: "book C", pages: 280 },
    { title: "book D", pages: 400 },
    { title: "book D", pages: 380 }
];
const filteredBooks = books.filter(item => item.pages > 300);
console.log(filteredBooks);

