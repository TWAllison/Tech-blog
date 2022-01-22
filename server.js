// import controllers, utils , path, etc.
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
const express = require('express');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

//set up handlebars engine with helpers 
const hbs = exphbs.create({ helpers });

const sess = {
    secret: 'i like tacos',
    cookies: {
        maxAge: 60 * 60 *1000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

//set up template engine for express.js
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extend: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});