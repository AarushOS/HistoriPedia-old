const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejs = require("ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("style"));
