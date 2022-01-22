const sequelize =require('../config/connection');
const { User, Article, Comment} = require('../models');

const userData = require('./user-seeds.json');
const commentData = require('./comment-seeds.json');
const articleData = require('./article-seeds.json');

const seedDb = async () => {
    await sequelize.sync({force: true });
    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    await Article.bulkCreate(articleData);
    await Comment.bulkCreate(commentData);

    process.exit(0);
};

seedDb();