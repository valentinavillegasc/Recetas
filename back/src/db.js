require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const RecetaModel = require("./models/RecetaModel");
const CategoriasModel = require("./models/CategoriaModel");
const database = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  { logging: false, force: false }
);

RecetaModel(database);
CategoriasModel(database);

const { Receta, Categoria } = database.models;
Receta.belongsToMany(Categoria, {
  through: "CategoriaDeReceta",
  timestamps: false,
});
Categoria.belongsToMany(Receta, {
  through: "CategoriaDeReceta",
  timestamps: false,
});

module.exports = { database, ...database.models };
