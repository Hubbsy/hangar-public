const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const controllers = require('./backend/controllers/controllers.js')
const axios = require('axios')
require('dotenv').config()


const PORT = process.env.PORT || 5000;

app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json())

// require('./backend/routes/SearchLocations.js')(app);



//TEST ROUTE
// app.get('/api/hello', (req, res) => {
//   res.send({ express: 'Hello From the Lizard People!' });
// });


app.get('/api/getFlights', controllers.getAllFlights);
app.post('/api/addFlights', controllers.addFlights);
app.delete('/api/deleteFlight/:id', controllers.deleteFlight)


//  WEATHER API
// app.post('/api/search-location', (req, res) => {

//   zipcode = req.body.zipcode;

//   if(!zipcode || zipcode.length < 5 || zipcode.length > 5) {
//     res.redirect('/error');
//   } else {
//     res.redirect('/current-weather');
//   }

// });

app.get('/api/search-location-weather', (req, res) => {
  //build api URL with user zip
  zipcode = req.body.zipcode
  const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=';
  const apiId = '&appid=ff3f60528265fb63b9f793d1b2b51017&units=imperial';

  const userLocation = (url1, url2, zipcode) => {

      let newUrl = url1 + zipcode + url2;
      return newUrl;
  };

  const apiUrl = userLocation(baseUrl, apiId, zipcode);


  axios.get(apiUrl)
  .then(res => res.json())
  .then(data => {
    res.send({ data });
  })
  .catch(err => {
    res.redirect('/error');
  });

});


if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
    
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}







app.listen(PORT, () => console.log(`App listening on port: ${PORT} my D0od!`));