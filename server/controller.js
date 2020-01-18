var helpers = require('../db/dbhelpers.js');

// define your controllers
var controller = {
  get: (req, res) => {
    helpers.get()
    .then(data => {
    res.status(200).send(data)
    })
    .catch (err => {
      res.status(404).send(err)
    })
  },
  post: (req, res) => {
    helpers.post(req.body)
    .then(() => res.status(200).send('cool'))
    .catch((err) => res.status(404).send(err))
  },
  put: (req, res) => {
    helpers.put(req.params._id, req.body)
    .then(() => res.status(200).send('edited'))
    .catch((err) => res.status(404).send(err))

  },
  delete: (req, res) => {
    helpers.delete(req.params._id)
    .then(() => res.status(200).send('deleted'))
    .catch((err) => res.status(404).send(err))
  }
};

module.exports = controller;