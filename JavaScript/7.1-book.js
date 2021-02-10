const book = {
    title: 'Life is a difficult time',
    author: 'Hanoch Daum',
    language: 'Hebrew',
    publicationYear: 2020,
    pages: 232
};

const bookDescription = (book) => {
    return (`The book "${book.title}" was written by ${book.author} in the year ${book.publicationYear}. The book is written in ${book.language} and it has ${book.pages} pages.`);
};

console.log(bookDescription(book));