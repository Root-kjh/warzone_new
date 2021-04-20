'use strict';
import dotenv from 'dotenv';
import Sequelize from 'sequelize';
import users from '../models/users';


dotenv.config();

const db = {};

const sequelize = new Sequelize("warzone", process.env.MYSQL_USERNAME, process.env.MYSQL_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "mysql"
})


db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.user = users(Sequelize, sequelize);

export default db;
