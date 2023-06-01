const express = require('express'); 
const {CalendarService, actually, date} = require('./../services/calendar.service');

const router = express.Router();
const final = date.getDate();
const today = actually.getDate();
const month = actually.getMonth();
const service = new CalendarService(today, final, month);

router.get('/', async (req, res) => {
  const dates = await service.fullMonth();
  res.render("index", dates);
});

module.exports = router;
