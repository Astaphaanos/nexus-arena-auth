import {DataTypes, Sequelize} from 'sequelize'
import db from '../db/conn.js'

const User = db.define('authUser', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    user: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default User