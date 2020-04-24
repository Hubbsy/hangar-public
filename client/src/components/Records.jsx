import React from 'react';
import uniqId from 'uniqid';

import EachRecord from './EachRecord.jsx';



const Records = (props) => {
  console.log(props.flight)
    return (
      <ul className="records">
        {props.flightRecords.slice(0,6).map((record) => {
          return (
            <EachRecord key={uniqId()} record={record} />
          )
        })}
      </ul>
    );
}



export default Records;