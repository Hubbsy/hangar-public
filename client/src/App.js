import React from 'react';
import './App.css';
// import uniqId from 'uniqid';
import axios from 'axios';

import Records from './components/Records.jsx'
import Header from './components/Header.jsx'
import Logo from './components/Logo.jsx'
import Summary from './components/Summary.jsx'
import Form from './components/Form.jsx'
import Footer from './components/footer.jsx'
import WeatherHome from './components/WeatherHome.jsx'
import CurrentWeather from './components/CurrentWeather.jsx'






class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      flightRecords: []
    }

    this.addFlightRecord = this.addFlightRecord.bind(this);
    this.getAllFlightRecords = this.getAllFlightRecords.bind(this);

  };


  componentDidMount() {
    console.log('mounted');
    // this.setState({
    //   flightRecords: flights
    // }, () => {console.log(this.state)});
    this.getAllFlightRecords();
  };

  getAllFlightRecords() {
    axios.get('http://localhost:5000/api/getFlights')
    .then(result => {
      console.log(result)
       this.setState({
         flightRecords: result.data.flights
       })
    })
    .catch(err => {
      console.log(err);
    })
  }

  addFlightRecord(record) {
    // record.id = uniqId();
    // const newFlights = this.state.flightRecords.concat(record);

    // this.setState({
    //   flightRecords: newFlights
    // })
    this.getAllFlightRecords();
  }



  render() {

    return (
      <div className="grid">

        {/* <div className="logo">
          <Logo />
        </div> */}

        <div className="header">
          <Header />
        </div>

        <div className="form">
          <Form addFlightRecord={this.addFlightRecord} />
        </div>

        <div className="records">
          <Records flightRecords={this.state.flightRecords} />
        </div>

        <div className="summary">
          <WeatherHome />
          <CurrentWeather />
        </div>

        <div className="footer">
          <Footer />
        </div>

      </div>
    )

  }
}

export default App;
