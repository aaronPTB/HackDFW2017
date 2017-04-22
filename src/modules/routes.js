import passport from 'passport';
import sendReactContext from './react-render-context';
import { update_elevator, update_db, get_messages, get_elevators, dump} from './db-functions';
import { change_password, request_make_user, request_delete_user, reset_password} from './db-functions';
import { User, Elevator, Message } from './db-functions';
import { user_json } from './reference/samples.js'

export default function(app) {
  app.get('/login', (req, res) =>
  {console.log("ddd"); req.user ? res.redirect("/") : sendReactContext(req,  res)});
  
  app.get('*', (req, res) =>
	req.user ? sendReactContext(req,  res) : res.redirect("/login"));

	app.post('/login', (req, res, next) => {
  	passport.authenticate('local', (err, user, info) => {
        if (err) return next(err);
        if (!user) return res.send({status: 'failure'});
        
        req.logIn(user, function(err) {
        if (err) return next(err);
        return res.send({status: 'success'});
    });
    })(req, res, next);
  });

  app.post("/change-password", (req, res) => {
    if (req.user) { change_password(req.user.username, req.body.password,
    (data) => res.send({result: data}))};
  })

  app.post("/add-user", (req, res) => {
    if (req.user && req.user.admin && req.body.username) {
      request_make_user(req.body.username, output => res.send(output))
    }
  })

  app.post("/del-user", (req, res) => {
    if (req.user.username == req.body.username) { res.send({status: "failure"})}
    if (req.user && req.user.admin && req.body.username && req.body.user != req.user.username) {
      request_delete_user(req.body.username, output => res.send(output))
    }
  })

  app.post("/reset-pass", (req, res) => {
    if (req.user && req.user.admin && req.body.username) {
      reset_password(req.body.username, output => res.send(output))
    }
  })

  app.post("/check-admin", (req, res) => res.send(req.user ? req.user.admin : false))

  app.post('/api/update', (req, res) => {
  })
}
