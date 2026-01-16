import fs from "fs";

export default class BooksService {
  static getBooks() {
    const books = JSON.parse(fs.readFileSync("books.json"));
    return books;
  }

  static buscarLivrosPorId(id) {
    const books = JSON.parse(fs.readFileSync("books.json"));
    const filteredBook = books.filter((book) => book.id === id)[0];
    return filteredBook;
  }

  static createBook(newBook) {
    const books = JSON.parse(fs.readFileSync("books.json"));
    const newBooksList = [...books, newBook];

    fs.writeFileSync("books.json", JSON.stringify(newBooksList));
  }

  static updateBookById(id, patch) {
    let bookList = JSON.parse(fs.readFileSync("books.json"));
    const index = bookList.findIndex((book) => book.id === id);

    const newBookList = { ...bookList[index], ...patch };

    bookList[index] = newBookList;

    fs.writeFileSync("books.json", JSON.stringify(bookList));
  }

  static deleteBookByID(id) {
    const bookList = JSON.parse(fs.readFileSync("books.json"));

    const newBookList = bookList.filter((book) => book.id !== id);

    fs.writeFileSync("books.json", JSON.stringify(newBookList));
  }
}
