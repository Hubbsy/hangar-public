const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const controllers = require('./backend/controllers/controllers.js')


const PORT = process.env.PORT || 3001;

app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json())





//TEST ROUTE
// app.get('/api/hello', (req, res) => {
//   res.send({ express: 'Hello From the Lizard People!' });
// });


app.get('/api/getFlights', controllers.getAllFlights);
app.post('/api/addFlights', controllers.addFlights);
app.delete('/api/deleteFlight/:id', controllers.deleteFlight)



app.listen(PORT, () => console.log(controllers));