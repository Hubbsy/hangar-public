const mongoose = require('mongoose');


 mongoose.connect('mongodb://localhost/flight_records', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Houston, we have a connection!')
})


const Schema = mongoose.Schema;

const records = new Schema ({
  name: String,
  duration: Number,
  instructor: String,
  timeOfDay: String,
  tailNumber: String,
  type: String
});

const flightRecord = mongoose.model('flightRecord', records)


module.exports = flightRecord;

