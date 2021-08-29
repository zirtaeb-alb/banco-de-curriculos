const express = require('express');
const CandidateController = require('./CandidateController');
const routes = new express.Router();

routes.post('/register', CandidateController.register);


module.exports = routes;