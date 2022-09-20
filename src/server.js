const express = require("express");
const validation = require("./middleware/validation");
const logger = require("./middleware/logger");
const errorHandler404 = require("./error-handlers/404");
const errorHandler500 = require("./error-handlers/500");

const app = express();

app.use(logger);

app.get("/person", validation, function(req, res){
    const name = req.query.name;
    res.setHeader('content-type', 'application/json');
    res.send({name});
})

app.use(errorHandler404);
app.use(errorHandler500);

const start = function(opts) {
    const PORT = opts.PORT;
    app.listen(PORT, () => console.log("Server Started"));
}

module.exports = {start, app};
