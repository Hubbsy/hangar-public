import React from 'react';
import uniqId from 'uniqid';
import {FaCommentAlt, FaThumbsUp, FaRegEye} from 'react-icons/fa';
import EachRecord from './EachRecord.jsx';




const Records = (props) => {
  
  const date = new Date().toLocaleDateString();

  const buttons = [
    {
      label: (
        <>
        <FaCommentAlt /> 10 Comments
        </>
      ),
    },
    {
      label: (
        <>
        <FaThumbsUp /> 200 Likes
        </>
      ),
    },
    {
      label: (
        <>
        <FaRegEye /> 1000 Views
        </>
      ),
    },
  ]

    return (
      <ul className="records">
          {props.flightRecords.map((record) => {
            return (
              <EachRecord key={uniqId()} record={record} date={date} actions={buttons} />
            )
          })}
      </ul>
    );
}



export default Records;