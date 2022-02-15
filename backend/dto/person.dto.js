const Joi = require('joi');

const id = Joi.string().uuid()
const name = Joi.string().min(3).max(20);
const surname = Joi.string().min(4).max(20);
const phone = Joi.string().min(9).max(9);

const createPersonSchema = Joi.object({
    name: name.required(),
    surname: surname.required(),
    phone: phone.required()
});

const getPersonSchema = Joi.object({
    id: id.required()
});

module.exports = { createPersonSchema, getPersonSchema };