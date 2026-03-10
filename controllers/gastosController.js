const Gasto = require("../models/gastos");

exports.criarGasto = async (req, res) => {

  try {

    const { descricao, valor, categoria, data } = req.body;

    if (!descricao || descricao.trim() === "") {
      return res.status(400).json({
        erro: "A descrição é obrigatória"
      });
    }

    if (!valor || isNaN(valor) || valor <= 0) {
      return res.status(400).json({
        erro: "O valor deve ser um número maior que 0"
      });
    }

    if (!categoria || categoria.trim() === "") {
      return res.status(400).json({
        erro: "A categoria é obrigatória"
      });
    }

    if (!data || isNaN(Date.parse(data))) {
      return res.status(400).json({
        erro: "Data inválida"
      });
    }

    const gasto = await Gasto.create({
      descricao,
      valor,
      categoria,
      data
    });

    res.status(201).json(gasto);

  } catch (error) {

    res.status(500).json({
      erro: "Erro ao criar gasto",
      detalhe: error.message
    });

  }

};

exports.listarGastos = async (req, res) => {

  try {

    const gastos = await Gasto.findAll();

    res.json(gastos);

  } catch (error) {

    res.status(500).json(error);

  }

};

exports.buscarGasto = async (req, res) => {

  try {

    const gasto = await Gasto.findByPk(req.params.id);

    res.json(gasto);

  } catch (error) {

    res.status(500).json(error);

  }

};

exports.deletarGasto = async (req, res) => {

  try {

    await Gasto.destroy({
      where: { id: req.params.id }
    });

    res.json({
      message: "Gasto removido"
    });

  } catch (error) {

    res.status(500).json(error);

  }

};
exports.atualizarGasto = async (req, res) => {
  try {

    const { id } = req.params;
    const { descricao, valor, categoria, data } = req.body;

    const gasto = await Gasto.findByPk(id);

    if (!gasto) {
      return res.status(404).json({
        erro: "Gasto não encontrado"
      });
    }

    if (descricao !== undefined && descricao.trim() === "") {
      return res.status(400).json({
        erro: "Descrição não pode ser vazia"
      });
    }

    if (valor !== undefined && (isNaN(valor) || valor <= 0)) {
      return res.status(400).json({
        erro: "Valor deve ser um número maior que 0"
      });
    }

    if (categoria !== undefined && categoria.trim() === "") {
      return res.status(400).json({
        erro: "Categoria não pode ser vazia"
      });
    }

    if (data !== undefined && isNaN(Date.parse(data))) {
      return res.status(400).json({
        erro: "Data inválida"
      });
    }

    await gasto.update({
      descricao,
      valor,
      categoria,
      data
    });

    res.json({
      mensagem: "Gasto atualizado com sucesso",
      gasto
    });

  } catch (error) {

    res.status(500).json({
      erro: "Erro ao atualizar gasto",
      detalhe: error.message
    });

  }
};