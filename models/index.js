const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment')


// Each User can have multiple Blogs on the same account
User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Blog.belongsTo(User, {
    foreignKey:'user_id'
})
//...

// Each Blog can have multiple comments under it
Blog.hasMany(Comment, {
    foreignKey:'blog_id',
    onDelete:'CASCADE'
})

Comment.belongsTo(Blog, {
    foreignKey:'blog_id'
})
// ... 

module.exports = {Blog,User,Comment}