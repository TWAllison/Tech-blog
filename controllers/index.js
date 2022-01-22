const router =require('express').router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes');

router.use('/', homeRoutes);
router.use('/', apiRoutes);
router.use('/', dashboardRoutes);

module.exports = router;