const express = require("express");
const app = express();
port = 4000;
app.listen(port, () => console.log(`Listening on ${port}`));
const db = require("./db");
const Event = require("./event/model");
const cors = require("cors");
const bodyParser = require("body-parser");
const corsMiddleware = cors();
const bodyParserMiddleware = bodyParser();
const eventRouter = require("./event/router");
app.use(corsMiddleware);
app.use(bodyParserMiddleware);
app.use(eventRouter);