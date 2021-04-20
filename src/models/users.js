const user = (Sequelize, sequelize) => {
    return sequelize.define('users', {
        id: {
            type: Sequelize.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
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
}

export default user;