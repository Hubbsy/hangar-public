import React from 'react';



const EachRecord = (props) => {
  return (
    <ul className="eachRecord">
      <div className="pilot"> Pilot:{ props.record.name } </div>
      <div className="duration"> Flight Duration:{ props.record.duration } </div>
      <div className="instructor"> Flight Instructor:{ props.record.instructor } </div>
      <div className="timeOfDay"> Time of Day:{ props.record.timeOfDay } </div>
      <div className="tailNumber"> Aircraft Tail Number:{ props.record.tailNumber } </div>
      <div className="type"> Aircraft Type:{ props.record.type } </div>
    </ul>
  );
}




export default EachRecord;