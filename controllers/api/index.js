const router = require('express').Router();
const articleRoutes = require('./articleRoutes');
const commentRoutes = require('./commentRoutes');
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/articles', articleRoutes);

module.exports = router;