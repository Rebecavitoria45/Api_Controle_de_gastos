const express = require("express");
const router = express.Router();

const gastosController = require("../controllers/gastosController");

/**
 * @swagger
 * /gastos:
 *   post:
 *     summary: Criar um novo gasto
 *     tags: [Gastos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               descricao:
 *                 type: string
 *               valor:
 *                 type: number
 *               categoria:
 *                 type: string
 *               data:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Gasto criado com sucesso
 */
router.post("/gastos", gastosController.criarGasto);
/**
 * @swagger
 * /gastos:
 *   get:
 *     summary: Lista todos os gastos
 *     tags: [Gastos]
 *     responses:
 *       200:
 *         description: Lista de gastos retornada com sucesso
 */
router.get("/gastos", gastosController.listarGastos);
/**
 * @swagger
 * /gastos/{id}:
 *   get:
 *     summary: Buscar um gasto pelo ID
 *     tags: [Gastos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do gasto
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Gasto encontrado
 *       404:
 *         description: Gasto não encontrado
 */
router.get("/gastos/:id", gastosController.buscarGasto);
/**
 * @swagger
 * /gastos/{id}:
 *   put:
 *     summary: Atualizar um gasto
 *     tags: [Gastos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do gasto
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               descricao:
 *                 type: string
 *               valor:
 *                 type: number
 *               categoria:
 *                 type: string
 *               data:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Gasto atualizado com sucesso
 *       404:
 *         description: Gasto não encontrado
 */
router.put("/gastos/:id", gastosController.atualizarGasto);
/**
 * @swagger
 * /gastos/{id}:
 *   delete:
 *     summary: Deletar um gasto
 *     tags: [Gastos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do gasto
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Gasto deletado com sucesso
 *       404:
 *         description: Gasto não encontrado
 */
router.delete("/gastos/:id", gastosController.deletarGasto);

module.exports = router;