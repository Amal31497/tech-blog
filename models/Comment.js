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
      comment_content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      blog_id: {
        type: DataTypes.INTEGER,
        references: {
            model:'blog',
            key:'id'
        }
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
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