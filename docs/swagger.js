const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Controle de Gastos",
      version: "1.0.0",
      description: "API para gerenciamento de gastos pessoais"
    },
    servers: [
      {
        url: "http://localhost:3000/api"
      }
    ]
  },
  apis: ["./routers/*.js"] 
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;