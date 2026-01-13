import LivrosService from "../services/livros-service.js";

export default class LivrosController {
  static async buscarLivros(req, res) {
    try {
      const livros = await LivrosService.buscarLivros();
      res.send(livros);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async buscarLivroPorID(req, res) {
    try {
      const id = req.params.id;
      if (id && Number(id)) {
        const livro = await LivrosService.buscarLivrosPorId(id);
        res.send(livro);
      } else {
        res.status(400).send("ID Inválido");
    }
} catch (error) {
    res.status(500).send(error.message);
}
}

static async criarLivro(req, res) {
    try {
        const livroNovo = req.body;
        if (req.body.nome) {
            await LivrosService.criarLivro(livroNovo);
            res.status(201).send("Livro criado com sucesso");
        } else {
            res.status(400).send("O campo nome é obrigatório");
      }

    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async atualizarLivroPorId(req, res) {
    try {
      const id = req.params.id;
      const novaAtualizacao = req.body;
      if (id && Number(id)) {
        await LivrosService.atualizarLivroPorId(id, novaAtualizacao);
        res.send("Livro atualizado com sucesso");
      } else {
        res.status(400).send("ID Inválido");
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async deletarLivroPorId(req, res) {
    try {
      const id = req.params.id;
      if (id && Number(id)) {
        await LivrosService.deletarLivroPorId(id);
        res.send("Livro deletado com sucesso");
      } else {
        res.status(400).send("ID Inválido");
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}
