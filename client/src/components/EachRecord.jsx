import React from 'react';


const EachRecord = (props) => {
  console.log(props.record)
  return (
    <div className="eachRecord">
    
      <div className="pilot">
        <div> Pilot: { props.record.name } </div>
      </div>
      <div className="timeOfDay">
        <div> Flight Number: { props.record._id } </div>
      </div>
      <div className="duration">
        <div> Flight Duration: { props.record.duration } </div>
      </div>
      <div className="instructor">
        <div> Flight Instructor: { props.record.instructor } </div>
      </div>
      <div className="timeOfDay">
        <div> Date: { new Date().toLocaleDateString() } </div>
      </div>
      <div className="tailNumber">
        <div> Aircraft Tail Number: { props.record.tailNumber } </div>
      </div>
      <div className="type">
        <div> Aircraft Type: { props.record.type } </div>
      </div>
      
    </div>
  );
}




export default EachRecord;