const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model { }

Comment.init(
    {
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        blogpost_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'blogpost',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        modelName: 'comment',
    }
);

module.exports = Comment;
