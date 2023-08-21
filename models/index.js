const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment = require('./Comment');

User.hasMany(BlogPost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

BlogPost.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {   // A user can have many comments
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {   // Each comment belongs to a user
    foreignKey: 'user_id'
});

BlogPost.hasMany(Comment, {   // A blog post can have many comments
    foreignKey: 'blogpost_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(BlogPost, {   // Each comment belongs to a blog post
    foreignKey: 'blogpost_id'
});

module.exports = { User, BlogPost, Comment };
