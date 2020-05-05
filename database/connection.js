const appConfig = require('../../../Node/ldaw-todo-list/configs/app');
const knexfile = require('../../../Node/ldaw-todo-list/knexfile');
const knex = require('knex')(knexfile[appConfig.env]);

module.exports = knex;
