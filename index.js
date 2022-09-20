require("dotenv").config();
const PORT = process.env.PORT || 3000;

const app = require("./src/server");

app.start({ PORT });
