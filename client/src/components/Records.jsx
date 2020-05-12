import React from 'react';
import uniqId from 'uniqid';
import styled from 'styled-components';
import {FaCommentAlt, FaThumbsUp, FaRegEye} from 'react-icons/fa';
import EachRecord from './EachRecord.jsx';




const Records = (props) => {
  
  

  const onCommentsClick = () => alert('You clicked comments')
  const onLikesClick = () => alert('You clicked likes')
  const onViewsClick = () => alert('You clicked views')


  const buttons = [
    {
      label: (
        <>
        <FaCommentAlt /> 10 Comments
        </>
      ),
      onClick: onCommentsClick,
    },
    {
      label: (
        <>
        <FaThumbsUp /> 200 Likes
        </>
      ),
      onClick: onLikesClick,
    },
    {
      label: (
        <>
        <FaRegEye /> 1000 Views
        </>
      ),
      onClick: onViewsClick,
    },
  ]

    return (
      <ul className="records">
          {props.flightRecords.map((record) => {
            return (
              <EachRecord key={uniqId()} record={record} actions={buttons} />
            )
          })}
      </ul>
    );
}



export default Records;