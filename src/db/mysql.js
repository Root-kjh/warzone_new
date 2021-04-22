import dotenv from 'dotenv';
import Sequelize from 'sequelize';

dotenv.config();

const db = {};

const sequelize = new Sequelize("warzone", process.env.MYSQL_USERNAME, process.env.MYSQL_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "mysql"
})

const users = sequelize.define('users', {
  id: {
      type: Sequelize.INTEGER(10).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
  },
  username: {
      type: Sequelize.STRING(50),
      allowNull: false
  },
  email: {
      type: Sequelize.STRING(50),
      allowNull: false
  },
  password: {
      type: Sequelize.STRING(128),
      allowNull: false
  }
});

const solvedProbs = sequelize.define('solvedProbs', {
  userId: {
      type: Sequelize.INTEGER(10).UNSIGNED,
      references: {
          model: 'users',
          key: 'id'
      }
  },
  probId: {
      type: Sequelize.STRING(128),
      allowNull: false
  },
  title: {
      type: Sequelize.STRING(100),
      allowNull: false
  },
  score: {
      type: Sequelize.INTEGER(10),
      allowNull: false
  }
});

users.hasMany(solvedProbs, {onDelete: 'cascade'});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.users = users;
db.solvedProbs = solvedProbs;

export default db;
