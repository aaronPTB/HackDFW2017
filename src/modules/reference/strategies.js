import passport from 'passport';
import local from 'passport-local';
import { User } from '../db-functions';

var LocalStrategy = new local.Strategy(
  (username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
			
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (password != user.password) { return done(null, false); }
      return done(null, user);
    });
  }
);

export default LocalStrategy;
