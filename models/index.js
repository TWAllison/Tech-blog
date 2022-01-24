const Article = require('./Article');
const User = require('./User')
const Comment = require('./Comment');

User.hasMany(Article, {
    foreignKey: 'user_id',
});

Article.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
    });

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Comment.belongsTo(Article, {
    foreignKey: 'article_id',
    onDelete: 'SET NULL'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Article.hasMany(Comment, {
    foreignKey: 'article_id'
});

module.exports = {User, Article, Comment};

