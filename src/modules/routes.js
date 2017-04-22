import passport from 'passport';
import sendReactContext from './react-render-context';
import { change_password, request_make_user, request_delete_user, reset_password} from './db-functions';
import { submit_new_food, get_food_list, delete_food, update_food, interest_in_food, set_text_nbr} from './db-functions';
import { user_json } from './reference/samples.js'

export default function(app) {
  app.get('/login', (req, res) =>
  req.user ? res.redirect("/") : sendReactContext(req,  res));
  
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

  app.post("/auth/change-password", (req, res) => {
    if (req.user) { change_password(req.user.username, req.body.password,
    (data) => res.send({result: data}))};
  })

  app.post("/auth/add-user", (req, res) => {
    if (req.body.username) {
      request_make_user(req.body.username, req.body.password, output => res.send(output))
    }
  })

  app.post("/auth/del-user", (req, res) => {
    if (req.user.username == req.body.username) { res.send({status: "failure"})}
    if (req.user && req.user.admin && req.body.username && req.body.user != req.user.username) {
      request_delete_user(req.body.username, output => res.send(output))
    }
  })

  app.post("/auth/reset-pass", (req, res) => {
    if (req.user && req.user.admin && req.body.username) {
      reset_password(req.body.username, output => res.send(output))
    }
  })

  app.post("/check-admin", (req, res) => res.send(req.user ? req.user.admin : false))

  app.post('/api/update', (req, res) => {

  })

  app.post("/card/submit-new-food", (req, res) => {
    if (req.body.item && req.body.cost && req.user && req.body.phone && req.body.location 
      && req.body.tags && req.body.description) {
      submit_new_food(req.body.item, req.body.cost, req.user, req.body.phone,
        req.body.location, 5, req.body.tags, req.body.description, output => res.send(output))
    }
  })

  app.post("/card/get-food-list", (req, res) => {

  })

  app.post("/card/delete-food", (req, res) => {

  })  

  app.post("/card/update-food", (req, res) => {

  })

  app.post("/card/interest-in-food", (req, res) => {

  })

  app.post("/card/set-text-nbr", (req, res) => {

  })
}
