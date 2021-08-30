const express = require('express');
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const routes = require('./routes');
const app = express();



mongoose.connect('mongodb+srv://beatriz:jrODV0NOkUwAPjLn@cluster0.m3cil.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

app.get("/", function(req, res) {
    res.sendFile( __dirname + "./frontend/index.html");
});

app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);
app.listen('8000', () => {
    console.log('rodando na porta 8000');
});
