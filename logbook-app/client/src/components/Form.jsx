import React from 'react';


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
      <h2 className="formTitle">Enter Flight Details</h2>
      <div className="form">
        <label className="formTitles">
            Pilot's Name
          </label>
          <div>
            <input className="inputBox" type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </div>
      </div>
      <div className="form">
          <label className="formDuration">
            Flight Duration
          </label>
          <div>
            <input className="inputBox" type="text" name="duration" value={this.state.duration} onChange={this.handleChange} />
          </div>
      </div>
      <div className="form">
          <label className="formInstructor">
            Instructor
          </label>
          <div>
            <input className="inputBox" type="text" name="instructor" value={this.state.instructor} onChange={this.handleChange} />
          </div>
      </div>
      <div className="form">
          <label className="formTitles">
            Time of Day
          </label>
          <div>
            <input className="inputBox" type="text" name="timeOfDay" value={this.state.timeOfDay} onChange={this.handleChange} />
          </div>
      </div>
      <div className="form">
          <label className="formTitles">
            Tail Number
          </label>
          <div>
            <input className="inputBox" type="text" name="tailNumber" value={this.state.tailNumber} onChange={this.handleChange} />
          </div>
      </div>
      <div className="form">
          <label className="formTitles">
            Aircraft Type
          </label>
          <div>
            <input className="inputBox" type="text" name="type" value={this.state.type} onChange={this.handleChange} />
          </div>
      </div>

        <input className="submit" type="submit" value="Submit" />
      </form>
    );
  }




}









export default Form;