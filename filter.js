
const books = [
    { title: "book A", pages: 150 },
    { title: "book b", pages: 300 },
    { title: "book c", pages: 280 },
    { title: "book d", pages: 400 },
    { title: "book d", pages: 380 }

];
const newbook = books.filter(book => book.pages > 300);
console.log(newbook);
