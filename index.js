const express = require("express");
const cors = require("cors");

const sequelize = require("./database/connection");
const Gasto = require("./models/gasto");
