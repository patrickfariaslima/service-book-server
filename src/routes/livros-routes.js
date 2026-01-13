import { Router } from "express";
import LivroController from "../controllers/livros-controller.js";

const routes = Router();

routes.get("/livros", LivroController.buscarLivros);

routes.get("/livros/:id", LivroController.buscarLivroPorID);

routes.post("/livros", LivroController.criarLivro);

routes.patch("/livros/:id", LivroController.atualizarLivroPorId);

routes.delete("/livros/:id", LivroController.deletarLivroPorId);

export default routes;
