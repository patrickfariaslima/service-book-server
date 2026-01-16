import express from "express";
import books from "./books-routes.js";
import favorite from "./favorite-routes.js"

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Books Server"));
  app.use(express.json(), books, favorite);
};

export default routes;
