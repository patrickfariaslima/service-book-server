import { Router } from "express";
import BooksController from "../controllers/books-controller.js";

const routes = Router();

routes.get("/livros", BooksController.getBooks);

routes.get("/livros/:id", BooksController.getBookByID);

routes.post("/livros", BooksController.createBook);

routes.patch("/livros/:id", BooksController.updateBookByID);

routes.delete("/livros/:id", BooksController.deleteBookByID);

export default routes;
