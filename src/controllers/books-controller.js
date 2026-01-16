import BooksService from "../services/books-service.js";

export default class BooksController {
  static async getBooks(req, res) {
    try {
      const books = await BooksService.getBooks();
      res.send(books);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getBookByID(req, res) {
    try {
      const id = req.params.id;
      if (id && Number(id)) {
        const book = await BooksService.buscarLivrosPorId(id);
        res.send(book);
      } else {
        res.status(400).send("ID Inválido");
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async createBook(req, res) {
    try {
      const newBook = req.body;
      if (req.body.nome) {
        await BooksService.createBook(newBook);
        res.status(201).send("Livro criado com sucesso");
      } else {
        res.status(400).send("O campo nome é obrigatório");
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async updateBookByID(req, res) {
    try {
      const id = req.params.id;
      const updateBook = req.body;
      if (id && Number(id)) {
        await BooksService.updateBookById(id, updateBook);
        res.send("Livro atualizado com sucesso");
      } else {
        res.status(400).send("ID Inválido");
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async deleteBookByID(req, res) {
    try {
      const id = req.params.id;
      if (id && Number(id)) {
        await BooksService.deleteBookByID(id);
        res.send("Livro deletado com sucesso");
      } else {
        res.status(400).send("ID Inválido");
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}
