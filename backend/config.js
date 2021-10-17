const Sequelize = require('sequelize');
const config = new Sequelize('task_manager', 'root', "", {dialect: 'mysql'});

module.exports = config;