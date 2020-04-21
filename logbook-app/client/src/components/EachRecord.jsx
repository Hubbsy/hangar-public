import React from 'react';



const EachRecord = (props) => {
  return (
    <li>
      <span> Pilot:{ props.record.name } </span>
      <span> Flight Duration:{ props.record.duration } </span>
      <span> Flight Instructor:{ props.record.instructor } </span>
      <span> Time of Day:{ props.record.timeOfDay } </span>
      <span> Aircraft Tail Number:{ props.record.tailNumber } </span>
      <span> Aircraft Type:{ props.record.type } </span>
    </li>
  );
}




export default EachRecord;