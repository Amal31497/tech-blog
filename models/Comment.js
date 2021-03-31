const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Comment extends Model{}

Comment.init(
    {
      comment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      blog_id: {
        type: DataTypes.INTEGER,
        references: {
            model:'blog',
            key:'blog_id'
        }
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
            model:'user',
            key:'user_id'
        }
      }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'comment'
    })

module.exports = Comment;