const { addManyFlights} = require('../models/models.js');
const faker = require('faker');




const fakeFlight = () => {

    const flight = {};
    flight.name = faker.name.findName()
    flight.duration = faker.random.number({'min': 0, 'max': 10});
    flight.instructor = faker.name.findName()
    flight.timeOfDay = 'Daytime'
    flight.tailNumber = "JG5645"
    flight.type = "single engine"
  return flight;
}


const fakeFlightsBatch = (num) => {
  const flights = [];
  for (let i = 0; i < num; i++) {
    let newFlight = fakeFlight();
    flights.push(newFlight);
  }
  return flights;
}


const seedFlightsBatches = async (num) => {
  var count = 0;
  while (count < num) {
  const seedBatches = fakeFlightsBatch(10);
  await addManyFlights(seedBatches);
  count++
  }
};


seedFlightsBatches(1);





module.exports = {
    fakeFlight
}