import React from 'react';
import uniqId from 'uniqid';
import EachRecord from './EachRecord.jsx';
import { CSSTransitionGroup } from 'react-transition-group'



const Records = (props) => {
    return (
      <ul className="records">
        <CSSTransitionGroup transitionName="test" transitionEnterTimeout={700} transitionLeaveTimeout={700} >
          {props.flightRecords.map((record) => {
            return (
              <EachRecord key={uniqId()} record={record} />
            )
          })}
        </CSSTransitionGroup>
      </ul>
    );
}



export default Records;