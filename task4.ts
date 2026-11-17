type Book = {
    id: number;
    title: string;
    author: string;
    pages: number;
    available: boolean;
    genre?: string;
};

let books: Book[] = [
    {
        id: 1,
        title: "1984",
        author: "George Orwell",
        pages: 328,
        available: true,
        genre: "Roman"
    },
    {
        id: 2,
        title: "Cinayət və cəza",
        author: "Dostoyevski",
        pages: 671,
        available: false
    },
    {
        id: 3,
        title: "Balaca şahzadə",
        author: "Antoine de Saint-Exupery",
        pages: 96,
        available: true,
        genre: "Fantastika"
    }
];

let availableBooks = books.filter(book => book.available);

console.log(availableBooks);