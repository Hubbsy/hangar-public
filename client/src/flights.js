const faker = require('faker');

// var randomNumber = faker.random.number({'min': 0, 'max': 10})
// var randomName = faker.name.findName();
// console.log(randomName)
// console.log(randomNumber)

const flights = [
  {
    name: faker.name.findName(),
    duration:faker.random.number({'min': 0, 'max': 10}) + ' hours'
  },
  {
    name: faker.name.findName(),
    duration:faker.random.number({'min': 0, 'max': 10}) + ' hours'
  },
  {
    name: faker.name.findName(),
    duration:faker.random.number({'min': 0, 'max': 10}) + ' hours'
  },
  {
    name: faker.name.findName(),
    duration:faker.random.number({'min': 0, 'max': 10}) + ' hours'
  },
  {
    name: faker.name.findName(),
    duration:faker.random.number({'min': 0, 'max': 10}) + ' hours'
  }
]

module.exports = flights;
