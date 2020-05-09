import React from 'react';
import uniqId from 'uniqid';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import EachRecord from './EachRecord.jsx';



const Records = (props) => {
    return (
      <ul className="records">
        <ReactCSSTransitionGroup>
          {props.flightRecords.map((record) => {
            return (
              <EachRecord key={uniqId()} record={record} />
            )
          })}
        </ReactCSSTransitionGroup>
      </ul>
    );
}



export default Records;