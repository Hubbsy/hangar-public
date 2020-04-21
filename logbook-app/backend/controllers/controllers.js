const models = require('../models/models.js');
const bluebird = require('bluebird')




const getAllFlights = (req, res) => {
  models.getAllFlights()
  .then(flights => {
    res.status(201).json({ flights })
  })
  .catch(err => {
    res.status(400).json({
      message: 'failed to retrieve data!!!',
      err: err
    })
  })
}


const addFlights = (req, res) => {
  const flight = {
    name: req.body.name,
    duration: req.body.duration,
    instructor: req.body.instructor,
    timeOfDay: req.body.timeOfDay,
    tailNumber: req.body.tailNumber,
    type: req.body.type
  };
  models.addFlights(flight)
  .then(result => {
    res.status(201).json({
      response: result
    })
  })
  .catch(err => {
    res.status(400).json({
      message: 'failed to retrieve data!!!',
      err: err
    })
  })
};


module.exports = {
  getAllFlights,
  addFlights
}