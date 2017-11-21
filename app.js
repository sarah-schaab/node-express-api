'use-strict';

const express = require('express');
const app = express();

const jsonParser = require('body-parser').json;
app.use(jsonParser());

app.use(function(req, res, next){
  req.body;
  next();
});

const port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log("Express Server Is listening on port", port);
});
