const express = require('express'); 
const {CalendarService, actually, date, week} = require('./../services/calendar.service');

const router = express.Router();
const final = date.getDate();
const today = actually.getDate();
const month = actually.getMonth();
const weekDay = week.getDay();


const service = new CalendarService(today, final, month, weekDay);

router.get('/', async (req, res) => {
  let list = [];
  const dates = await service.fullMonth();
  dates.forEach((element,index) => {

    if(!(element.notes[0] == undefined)){
      list.push({ 
        day: (index + 1),
        id: element.notes[0].id,
        title: element.notes[0].title, 
        description: element.notes[0].description
      });
    }
  });
  res.render("index", { date: dates, month: dates[0].month, list: list});
});

router.get('/:day', async (req,res) =>{
  const { day } = req.params;
  const data = await service.findAllDay(day);
  const info = data.notes;
  res.render("note", { note: data,info: info,data: null});
})

router.get('/edit/:day/:id', async (req,res)=>{
  const { day,  id } = req.params;
  const data = await service.findAllDay(day);
  const note = await service.find(day,id);
  const info = data.notes;
  const edit = note;
  res.render("note",{note: data, info: info, data: edit });
})

router.post('/', async (req,res) => {
  const {day, ...body} = req.body;
  const newNote = await service.add(body,day);
  res.redirect(`/v1/calendar/${newNote}`);
});

router.post('/update/:day/:id', async (req,res)=>{
  const { day,id } = req.params;
  const changes = req.body;
  const updatedNote = await service.update(day,id,changes);
  res.redirect(`/v1/calendar/${updatedNote}`);
});

router.get('/delete/:day/:id', async (req,res)=>{
  const { day,id } = req.params;
  const trashed = await service.delete(day,id);
  res.redirect(`/v1/calendar/${trashed}`);
})

module.exports = router;
