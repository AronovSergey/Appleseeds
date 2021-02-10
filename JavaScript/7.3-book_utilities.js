const firstBook = {
    name: 'Life is a difficult time',
    author: 'Hanoch Daum',
    year: 2020,
};
const secondBook = {
    name: 'Steve Jobs: The Exclusive Biography',
    author: 'Walter Isaacson',
    year: 2011,
};
const bookUtils = {
    getFirstPublished: function(firstBook, secondBook){
        return firstBook.year < secondBook.year ? firstBook : secondBook;
    },
    setNewEdition: function(book, editionYear){
        book.latestEdition = book.year;
        book.year = editionYear;
    },
    setLanguage: function(book, language){
         book.language = language;
    },
    setTranslation: function(book, language, translator){
        book.translation = {
            language: language,
            translator: translator,
        };
    },
    setPublisher: function(book, name, location){
        book.publisher = {
            name: name,
            location: location,
        };
    },
    isSamePublisher: function(firstBook, secondBook){
        return (firstBook.publisher.name === secondBook.publisher.name && firstBook.publisher.location === secondBook.publisher.location) ? true : false;
    }
};

// 3
console.log(bookUtils.getFirstPublished(firstBook, secondBook));
// 4
bookUtils.setNewEdition(firstBook, 2021);
console.log(firstBook);
// 5
bookUtils.setLanguage(firstBook, 'English');
console.log(firstBook);
bookUtils.setLanguage(firstBook, 'Hebrew');
console.log(firstBook);
// 6
bookUtils.setTranslation(firstBook, 'Hebrew', 'Sergey');
console.log(firstBook);
// 7
bookUtils.setPublisher(firstBook, 'Appleseeds Academy', 'Israel');
console.log(firstBook);
// 8
bookUtils.setPublisher(secondBook, 'Appleseeds Academy', 'Israel');
console.log(bookUtils.isSamePublisher(firstBook, secondBook));
bookUtils.setPublisher(secondBook, 'Appleseeds Academy', 'US');
console.log(bookUtils.isSamePublisher(firstBook, secondBook));
