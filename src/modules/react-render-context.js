import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './reference/react-routes.js'

//helper function that allows the server to know what HTML to send via server-
//side rendering
export default function sendReactContext(req, res) {
  match(
    {routes, location: req.url },
    (err, redirectLocation, renderProps) => {
      if (err) { return res.status(500).send(err.message); }
      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname
                               + redirectLocation.search);
      }
      let markup = "";
      if (renderProps) {
        markup = renderToString(<RouterContext {...renderProps}/>);
      }
      else {
        res.status(404);
      }
      // render the index template with the embedded React markup
      return res.render('index', {markup});
    }
  );
}
