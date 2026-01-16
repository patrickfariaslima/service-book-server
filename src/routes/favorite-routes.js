import { Router } from "express";
import FavoriteController from "../controllers/favorites-controller.js";

const routes = Router();

routes.get("/favoritos", FavoriteController.getFavorite);
routes.post("/favoritos/:id", FavoriteController.createFavorite);
routes.delete("/favoritos/:id", FavoriteController.deleteFavoriteById);

export default routes;