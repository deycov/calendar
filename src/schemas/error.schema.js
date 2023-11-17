const Joi = require("joi");

const title = Joi.string().min(3).max(25);
const note = Joi.string().max(300);
const day = Joi.number();

const schema = Joi.object({
  title: title.required(),
  description: note.required(),
  day: day
});

const updateSchema = Joi.object({
  title: title.required(),
  description: note.required(),
  day: day
});

module.exports = {schema, updateSchema};