const express = require('express');
const calendarRoutes = require('./calendar.routes.js');

const router = express.Router();

function routesApp (app){
  app.use('/v1', router);
  router.use('/calendar', calendarRoutes);
  
}

module.exports = { routesApp }; 