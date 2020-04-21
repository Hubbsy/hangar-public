import React from 'react';
import axios from 'axios';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      duration: '',
      instructor: '',
      timeOfDay: '',
      tailNumber: '',
      type: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleChange(event) {
    const key = event.target.name
    const value = event.target.value
    this.setState({
      [key]: value
    })
  }

  handleSubmit(event) {
    // alert(`A name was submitted: ${this.state.name} and a duration: ${this.state.duration} was submitted`);
    event.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }
    fetch('http://localhost:3000/api/addFlights', options)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.props.addFlightRecord();
      this.clearForm();
    })
    .catch(err => {
      console.log(err);
    })
    // this.props.addFlightRecord(this.state);
    // this.clearForm();
  }

  clearForm() {
    this.setState ({
      name: '',
      duration: '',
      instructor: '',
      timeOfDay: '',
      tailNumber: '',
      type: ''
    });
  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <div>
        <label>
            Pilot's Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </label>
      </div>
      <div>
          <label>
            Flight Duration:
            <input type="text" name="duration" value={this.state.duration} onChange={this.handleChange} />
          </label>
      </div>
          <div>
            <label>
              Instructor:
              <input type="text" name="instructor" value={this.state.instructor} onChange={this.handleChange} />
            </label>
      </div>
          <div>
            <label>
              Time of Day:
              <input type="text" name="timeOfDay" value={this.state.timeOfDay} onChange={this.handleChange} />
            </label>
      </div>
          <div>
            <label>
              Tail Number:
              <input type="text" name="tailNumber" value={this.state.tailNumber} onChange={this.handleChange} />
            </label>
      </div>
          <div>
            <label>
              Aircraft Type:
              <input type="text" name="type" value={this.state.type} onChange={this.handleChange} />
            </label>
      </div>

        <input type="submit" value="Submit" />
      </form>
    );
  }




}









export default Form;