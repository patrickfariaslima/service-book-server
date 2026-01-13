import fs from "fs";

export default class LivrosService {
  static buscarLivros() {
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    return livros;
  }

  static buscarLivrosPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    const livroFiltrado = livros.filter((livro) => livro.id === id)[0];
    return livroFiltrado;
  }

  static criarLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    const novaListaDeLivros = [...livros, livroNovo];

    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros));
  }

  static atualizarLivroPorId(id, patch) {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"));
    const index = livrosAtuais.findIndex((livro) => livro.id === id);

    const conteudoMudado = { ...livrosAtuais[index], ...patch };

    livrosAtuais[index] = conteudoMudado;

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais));
  }

  static deletarLivroPorId(id) {
    const livrosAtuais = JSON.parse(fs.readFileSync("livros.json"));

    const novaListaLivros = livrosAtuais.filter((livro) => livro.id !== id);

    fs.writeFileSync("livros.json", JSON.stringify(novaListaLivros));
  }
}
