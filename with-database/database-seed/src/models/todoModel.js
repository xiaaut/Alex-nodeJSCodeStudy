import { DataTypes } from 'sequelize';
import sequelize from '../utils/dbHelper.js';

const Todo = sequelize.define(
    'Todo',
    {
        // Model attributes are defined here
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            // allowNull defaults to true
        },
        content: {
            type: DataTypes.STRING,
            // allowNull defaults to true
        },
        tag: {
            type: DataTypes.STRING,
            // allowNull defaults to true
        }
    },
    {
        // Other model options go here
        tableName: 'todo',
        createdAt: false,
        updatedAt: false,
    },
);

export default Todo;