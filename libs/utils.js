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

module.exports = {
 print,
 alertInfo,
 getJSONrep,
 postJSONrep,
 updateJSONrep,
 deleteJSONrep
};
