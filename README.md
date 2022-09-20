# A simple express app

This just demonstrates middleware and error handling implemented in Express.js

There is one route: `/person`

The root takes a query parameter, name, like so: `/person?name=Mark`
Then it returns a json object `{"name": "Mark"}` in the response.

If the route is missing the `name` query parameter, an error is raised. The error is handled by the error handler defined in `src/error-handlers/500.js`

If the route is not found, a 404 error is raised by the error handler in  `src/error-handlers/404.js`

The app is live here: [https://basic-express-server-w.herokuapp.com/person?name=Mark](https://basic-express-server-w.herokuapp.com/person?name=Mark)
