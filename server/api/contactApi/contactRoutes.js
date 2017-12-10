'use strict';

const contactRoute = require('express').Router();
const { contactModel } = require('./contactModels.js');
const { getJSONrep, postJSONrep, updateJSONrep, deleteJSONrep } = require('../../../libs/utils.js');

contactRoute.route('/')
  .get(contactModel.getAllContacts, getJSONrep)
  .post(contactModel.createNewContact, postJSONrep);

contactRoute.route('/:id')
 .get(contactModel.getSingleContact, getJSONrep)
 .put(contactModel.updateContact, updateJSONrep)
 .delete(contactModel.deleteContact, deleteJSONrep);

module.exports = contactRoute;
