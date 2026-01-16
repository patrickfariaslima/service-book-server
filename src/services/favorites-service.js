import fs from "fs";

export default class FavoriteService {
  static getFavorite() {
    const favorite = JSON.parse(fs.readFileSync("favorite.json"));
    return favorite;
  }

  static createFavorite(id) {
    const books = JSON.parse(fs.readFileSync("books.json"));
    const favoriteList = JSON.parse(fs.readFileSync("favorite.json"));

    const favoriteBook = books.find((book) => book.id === id);

    const newFavoriteBookList = [...favoriteList, favoriteBook];

    fs.writeFileSync("favorite.json", JSON.stringify(newFavoriteBookList));
  }

  static deleteFavoriteById(id) {
    const favorite = JSON.parse(fs.readFileSync("favorite.json"));

    const filteredFavorite = favorite.filter((book) => book.id !== id);

    fs.writeFileSync("favorite.json", JSON.stringify(filteredFavorite));
  }
}
