import passport from 'passport';
import sendReactContext from './react-render-context';
import { update_elevator, update_db, get_messages, get_elevators, dump} from './db-functions';
import { change_password, request_make_user, request_delete_user, reset_password} from './db-functions';
import { User, Elevator, Message } from './db-functions';
import { user_json } from './reference/samples.js'

export default function(app) {
  app.get('/login', (req, res) =>
  req.user ? res.redirect("/") : sendReactContext(req,  res));
  
  app.get('*', (req, res) =>
	req.user ? sendReactContext(req,  res) : res.redirect("/login"));

	app.post('/login', (req, res, next) => {
  	passport.authenticate('local', (err, user, info) => {
        if (err) { return next(err); }
        if (!user) { return res.send({status: 'failure'}); }
        req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.send({status: 'success'});
    });
    })(req, res, next);
  });

  app.post('/api/update', (req, res) => {
    if (req.body) { update_elevator(req.body, () => {
      res.send()
    })}
  })
}
