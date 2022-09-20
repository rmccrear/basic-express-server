const express = require("express");

const app = express();

app.get("/person", function(req, res){
    const name = req.query.name;
    console.log("req param name:", name);
    res.setHeader('content-type', 'application/json');
    res.send({name});
})

const start = function(opts) {
    const PORT = opts.PORT;
    app.listen(PORT, () => console.log("Server Started"));
}

module.exports = {start};
