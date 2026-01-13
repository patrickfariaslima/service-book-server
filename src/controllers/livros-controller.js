export default class LivroController {
  static getLivros(req, res) {
    try {
      res.send("Hello World!");
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static criarLivro(req, res) {
    res.send("Livro criado com sucesso");
  }

  static atualizarLivroPorId(req, res) {
    res.send("Livro atualizado com sucesso");
  }

  static deletarLivroPorId(req, res) {
    res.send("Livro deletado com sucesso");
  }
}
