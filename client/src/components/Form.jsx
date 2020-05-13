import React from 'react';


class Form extends React.Component {
  constructor(props) {
    super(props);
    // let timestamp = new Date();
    // let date = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(timestamp)

    this.state = {
      _id: '',
      name: '',
      duration: '',
      instructor: '',
      timeOfDay: '',
      tailNumber: '',
      type: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

  }



  handleChange(event) {
    event.preventDefault();
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
    fetch('/api/addFlights', options)
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      this.props.addFlightRecord();
      this.clearForm();
    })
    .catch(err => {
      console.log(err);
    })
  }

  handleDelete(event) {
    fetch("/api/deleteFlight/" + this.state._id, {
        method: 'DELETE'
    })
    .then(function (resp) {
        alert('Roger That');
    });
    // event.preventDefault();
}




  clearForm() {
    this.setState({
      _id: '',
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
    <div>
      <form onSubmit={this.handleSubmit}>
        <h2 className="formTitle">Enter Flight Details</h2>
        <div className="form">
          <label className="formTitles">
              Name of Pilot
            </label>
            <div>
              <input required className="inputBox" type="text" name="name" value={this.state.name} onChange={this.handleChange} />
            </div>
        </div>
        {/* <div className="form">
            <label className="formDuration">
              Flight Duration
            </label>
            <div>
              <input required className="inputBox" type="text" name="duration" value={this.state.duration} onChange={this.handleChange} />
            </div>
        </div> */}
        <div className="form">
            <label className="formInstructor">
              Date and Destination
            </label>
            <div>
              <input required className="inputBox" type="text" name="instructor" value={this.state.instructor} onChange={this.handleChange} />
            </div>
        </div>
        {/* <div className="form">
            <label className="formTitles">
              Time of Day
            </label>
            <div>
              <input required className="inputBox" type="text" name="timeOfDay" value={this.state.timeOfDay} onChange={this.handleChange} />
            </div>
        </div> */}
        {/* <div className="form">
            <label className="formTitles">
              Tail Number
            </label>
            <div>
              <input required className="inputBox" type="text" name="tailNumber" value={this.state.tailNumber} onChange={this.handleChange} />
            </div>
        </div> */}
        <div className="form">
            <label className="formTitles">
              Description of flight
            </label>
            <div>
              <input required className="inputBox" type="text" name="type" value={this.state.type} onChange={this.handleChange} />
            </div>
        </div>
          <input className="submit" type="submit" value="Submit" />
      </form>
      <form onSubmit={this.handleDelete}>
        <label>
          Delete by Flight Number
        </label>
          <div>
            <input required className="inputBox" type="text" name="_id" value={this.state._id} onChange={this.handleChange}  />
          </div>
          <div>
            <input className="submit" type="submit" value="delete" />
          </div>
      </form>
  </div>
    );
  }




}









export default Form;