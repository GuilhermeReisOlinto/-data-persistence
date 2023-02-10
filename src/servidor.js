const express = require('express');
const app = express();

const routes = require('./route');

app.use(express.json());
app.use(routes);


app.listen(4200);
