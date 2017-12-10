'use strict';

const { bookshelf }  = require('../../dbConfig/bookshelf.js');

const Contact = bookshelf.Model.extend({
 tableName: 'contacts',
});

const contactModel = {};

 contactModel.getAllContacts = (req, res, next) => {
  return Contact.fetchAll()
  .then((contacts) => {
   res.contacts = contacts;
   next();
 })
  .catch(error => next(error));
};

 contactModel.createNewContact = (req, res, next) => {
  return new Contact({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    emailAddress: req.body.emailAddress,
  })
  .save()
  .then(next())
  .catch(error => next(error));
};

 contactModel.getSingleContact = (req, res, next) => {
  return Contact.where('id', req.params.id)
  .fetchAll()
  .then((contacts) => {
    res.contacts = contacts;
    next();
  })
  .catch(error => next(error));
};

 contactModel.updateContact = (req, res, next) => {
  return Contact.where('id', req.params.id)
  .fetch()
  .then((contact) => {
    contact.save({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      emailAddress: req.body.emailAddress,
    })
    .then(next());
  })
  .catch(error => next(error));
};

 contactModel.deleteContact = (req, res, next) => {
  return Contact.where('id', req.params.id)
  .destroy()
  .then(next())
  .catch(error => next(error));
};

module.exports = {
 contactModel
};
