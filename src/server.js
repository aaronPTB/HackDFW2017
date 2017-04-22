import body_parser from 'body-parser';
import express from 'express';
import session from 'express-session';
import passport from 'passport';
import path from 'path';
import routes from './modules/routes';
import LocalStrategy from './modules/reference/strategies';
import CookieParser from 'cookie-parser';

var app = express();
//Configuring app middlewear
app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());
//Change our view engine to hbs for handlebar templating
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//Use the static folder for static pages
app.use(express.static(__dirname + "/static/css"));
app.use(express.static(__dirname + "/static/js"));

//Set up express session to be used with Passport.js
app.use(CookieParser());
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true}));
//Set up Passport session
app.use(passport.initialize());
app.use(passport.session());
passport.use(LocalStrategy);
passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser((user, done) => done(null, user))

routes(app);
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
app.listen(port, err => {
  if (err) { return console.error(err); }
  console.info(`Server running on localhost:${port} [${env}]`);
});
