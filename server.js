const express = require("express");
const app = express();
const server = require("http").Server(app);

const config = require("./config");

const bodyParser = require("body-parser");
const socket = require("./socket");
const response = require("./network/response");
// const router = require("./components/message/network");
const router = require("./network/routes");
const db = require("./db");

db(config.dbUrl);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(router);
socket.connect(server);
router(app);

app.use(config.publicRoute, express.static("public"));

server.listen(config.port, function() {
  console.log("La app está escuchando en " +config.host + ":" + config.port);
});
