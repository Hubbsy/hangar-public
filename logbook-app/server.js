const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



//TEST ROUTE
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From the Lizard People!' });
});




app.listen(PORT, () => console.log(`listening on port: ${PORT} baby!`));