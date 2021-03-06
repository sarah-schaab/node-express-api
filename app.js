'use-strict';

const express = require('express');
const app = express();
const routes = require("./routes");

const jsonParser = require('body-parser').json;
const logger = require('morgan');

app.use(jsonParser());
app.use("/questions",routes);

const port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log("Express Server Is listening on port", port);
});
