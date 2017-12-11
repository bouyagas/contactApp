'use strict';

const print = (input) => {
  return console.log(input);
};

const alertInfo = (msg) => {
  return alert(msg);
};

const getJSONrep = (req, res, next) => {
  return res.json(res.contacts || []);
  next();
};

const postJSONrep = (req, res, next) => {
  return res.json({ message: 'A contact has been successfully created' });
  next();
};

const updateJSONrep = (req, res, next) => {
  return res.json({ message: 'A contact has been successfully update' });
  next();
};

const deleteJSONrep = (req, res, next) => {
  return res.json({ message: 'A contact has been successfully deleted' });
  next();
};

const isValidEmail = (email) => {
    const emailRegex = new RegExp(/^[A-Z0-9._%+-]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i);
    return emailRegex.test(email);
};

module.exports = {
 print,
 alertInfo,
 getJSONrep,
 postJSONrep,
 updateJSONrep,
 deleteJSONrep,
 isValidEmail
};
