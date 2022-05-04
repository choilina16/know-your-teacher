const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// sessions activity 15
const sess = {
  secret: 'Super secret secret',
  // 86400 milliseconds = 1 day -> user will be logged in for 1 day
  cookie: { maxAge: 86400 },
  // forces the session to be saved back to the session store -> most cases this will be false
  resave: false,
  // force a session that is new but not yet modified to be saved back to the session store -> most cases this will be true
  saveUninitialized: true,
  // connect-session-sequelize to generate that session for you (new table in the db)
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
