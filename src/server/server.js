const http = require("http");
const express = require("express");
const path = require("path");
const axios = require("axios");
const bodyParser = require("body-parser");
const Route = require("./Route");
const app = express();
const server = http.createServer(app).listen(8080);
const _dirname = path.resolve();
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Route);

axios.defaults.withCredentials = true;
