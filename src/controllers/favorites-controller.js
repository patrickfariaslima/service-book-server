import FavoriteService from "../services/favorites-service.js";

export default class FavoriteController {
  static getFavorite(req, res) {
    try {
      const favoriteBooks = FavoriteService.getFavorite();
      res.send(favoriteBooks);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static createFavorite(req, res) {
    try {
      const newFavoriteBookID = req.params.id;
      if (newFavoriteBookID && Number(newFavoriteBookID)) {
        FavoriteService.createFavorite(newFavoriteBookID);
        res.status(201).send("Livro favorito criado com sucesso");
      } else {
        res.status(400).send("O campo id é obrigatório");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send(error.message);
    }
  }

  static deleteFavoriteById(req, res) {
    try {
      const id = req.params.id;
      if (id && Number(id)) {
        FavoriteService.deleteFavoriteById(id);
        res.send("Livro deletado com sucesso");
      } else {
        res.status(400).send("O campo id é obrigatório");
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}
