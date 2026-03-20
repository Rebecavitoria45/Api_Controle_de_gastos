# API de Controle de Gastos 💰

API REST desenvolvida em **Node.js** para gerenciamento de gastos pessoais.  
O projeto permite cadastrar, consultar, atualizar e remover gastos

A API utiliza **arquitetura em camadas (routes, controllers e models)** e integração com banco de dados **MySQL** usando ORM.

---

# 🚀 Tecnologias Utilizadas

- Node.js
- Express
- Sequelize
- MySQL
- Swagger (documentação da API)

---

# ⚙️ Funcionalidades

A API possui as seguintes funcionalidades:

- Criar gasto
- Listar todos os gastos
- Buscar gasto por ID
- Atualizar gasto
- Deletar gasto
---

# 🛠️ Instalação

###  Clonar o repositório

```bash
git clone https://github.com/Rebecavitoria45/Api_Controle_de_gastos.git
```

###  Acessar a pasta do projeto
```bash
cd api-controle-gastos
```
### Instalar as dependências
```bash
npm install
```
### Configurar as variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto e adicione:

```env
DB_NAME=controle_gastos
DB_USER=seu user
DB_PASSWORD=sua senha
DB_HOST=localhost
```
### Crie o banco de dados
 No mysql execute:
 CREATE DATABASE controle_gastos;
 
### Inicie o servidor
```bash
npm start
```
