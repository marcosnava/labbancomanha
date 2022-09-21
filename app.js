const express = require('express');

const connection = require('./database/database');

// Models
const Usuario = require('./model/usuario');
const Tipo = require('./model/tipo');
const Figurinha = require('./model/figurinha');

const app = express();

// Environment Setup
// Forms Parser
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Database
connection
  .authenticate()
  .then(() => {
    console.log('Conexão feita com sucesso!');
  })
  .catch((error) => {
    console.log(error);
  });

// Access from other origin
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
});

module.exports = app;
