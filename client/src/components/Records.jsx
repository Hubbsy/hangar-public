import React from 'react';
import uniqId from 'uniqid';
import EachRecord from './EachRecord.jsx';




const Records = (props) => {
  
  const date = new Date().toLocaleDateString();
  const buttons = [
    {
      label: '10 Comments'
    },
    {
      label: '132 Likes'
    },
    {
      label: '145 Views'
    },
  ]

    return (
      <ul className="records">
          {props.flightRecords.map((record) => {
            return (
              <EachRecord key={uniqId()} record={record} date={date} />
            )
          })}
      </ul>
    );
}



export default Records;