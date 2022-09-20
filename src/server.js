const express = require("express");

const app = express();

const start = function(opts) {
    const PORT = opts.PORT;
    app.listen(PORT, () => console.log("Server Started"))
}

module.exports = {start}
