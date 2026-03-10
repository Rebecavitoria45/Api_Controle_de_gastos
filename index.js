const express = require("express");
const sequelize = require("./database/connection");
const gastosRoutes = require("./routers/gastosRoutes");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/swagger");

const app = express();

app.use(express.json());

app.use("/api", gastosRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

async function start() {

  try {

    await sequelize.authenticate();
    console.log("Conectado ao MySQL");

    await sequelize.sync();
    console.log("Tabelas sincronizadas");

    app.listen(3000, () => {
      console.log("Servidor rodando na porta 3000 e Documentação: http://localhost:3000/api-docs");
    });

  } catch (error) {
    console.error("Erro ao iniciar servidor:", error);
  }

}

start();