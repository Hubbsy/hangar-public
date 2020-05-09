const flightRecord = require('../db/connection.js');





// MONGODB MODELS
const getAllFlights = () => {
  return new Promise((resolve, reject) => {
      flightRecord.collection.find({}).limit(6).sort({$natural:-1}).toArray((err, results) => {
      if(err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const addManyFlights = (flightBatch) => {
  return new Promise((resolve, reject) => {
    flightRecord.collection.insertMany(flightBatch, (err, docs) => {
      if (err) {
        reject(err);
      } else {
        resolve(docs.length)
      }
    })
  })
};

const addFlights = (flight) => {
  return new Promise((resolve, reject) => {
    flightRecord.collection.insertOne(flight, (err, docs) => {
      if (err) {
        reject(err);
      } else {
        resolve(docs.length)
      }
    })
  })
};

const deleteFlight = (id) => {
  return new Promise((resolve, reject) => {
    flightRecord.deleteOne({"_id": id}, (err, docs) => {
      if (err) {
        reject(err);
      } else {
        resolve(docs.length)
      }
    })
  })
};





module.exports = {
  getAllFlights,
  addManyFlights,
  addFlights,
  deleteFlight
}