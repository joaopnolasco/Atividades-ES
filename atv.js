class Book {
  constructor(title, description, author) {
    this.id = this.generateId();
    this.title = title;
    this.description = description;
    this.author = author;
  }

  // Gera um ID único para cada livro
  generateId() {
    return Math.random().toString(36).substring(2, 9);
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(bookInfo) {
    const newBook = new Book(
      bookInfo.title,
      bookInfo.description,
      bookInfo.author
    );
    this.books.push(newBook);
    return newBook;
  }

  getBooks() {
    return this.books;
  }

  removeBookById(id) {
    this.books = this.books.filter((book) => book.id !== id);
  }

  getBookById(id) {
    return this.books.find((book) => book.id === id);
  }

  updateBookById(id, info) {
    const book = this.getBookById(id);
    if (book) {
      if (info.title) book.title = info.title;
      if (info.description) book.description = info.description;
      if (info.author) book.author = info.author;
      return book;
    }
    return null;
  }
}

// Exemplo de uso:

// Criando uma biblioteca
const library = new Library();

// Adicionando um livro
const newBook = library.addBook({
  title: "1984",
  description: "Dystopian novel",
  author: "George Orwell",
});
console.log(newBook);

// Listando todos os livros
console.log(library.getBooks());

// Obtendo um livro pelo ID
const book = library.getBookById(newBook.id);
console.log(book);

// Editando um livro pelo ID
library.updateBookById(newBook.id, { title: "Animal Farm" });
console.log(library.getBookById(newBook.id));

// Removendo um livro pelo ID
library.removeBookById(newBook.id);
console.log(library.getBooks());
