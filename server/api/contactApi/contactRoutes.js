'use strict';

import express from 'express';
import contactModel from './contactModels.js';
import { getJSONrep, postJSONrep, updateJSONrep, deleteJSONrep } from '../../../libs/utils.js';

const contactRoute = express.Router();

contactRoute.route('/')
  .get(contactModel.getAllContacts, getJSONrep)
  .post(contactModel.createNewContact, postJSONrep);

contactRoute.route('/:id')
 .get(contactModel.getSingleContact, getJSONrep)
 .put(contactModel.updateContact, updateJSONrep)
 .delete(contactModel.deleteContact, deleteJSONrep);

export default contactRoute;
