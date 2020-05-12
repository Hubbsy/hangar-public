import React from 'react';
import styled from 'styled-components'


const Title = styled.h2`
  color: #fff;
  font-weight: 300;
`
const Date = styled.div`
  color: #ccc;
  font-weight: 300; 
  ${'' /* margin: 6px 0; */}
`

const Description = styled.p`
  color: #fff;
  font-weight: 300;
`

const Action = styled.button`
  margin: 0 5px;
  padding: 8px 14px;
  background: rgba(155, 155, 155, 0.2);
  color: #fff;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
` 

const EachRecord = (props) => {
  console.log(props);

  return (
  <div className="eachRecord" >
    <Title> {props.record.name} </Title>
    <Date> {props.date}, {props.record.instructor} </Date>
    <Description> {props.record.type} </Description>
    {props.actions.map(({label}) => (
      <Action> {label} </Action>
    ))}
    <div className="timeOfDay">
       <div> { props.record._id } </div>
    </div>
  </div>
  )
}




// const EachRecord = (props) => {
 
//   return (
//     <div className="eachRecord">
//       <div className="pilot">
//         <div> Pilot: { props.record.name } </div>
//       </div>
//       <div className="timeOfDay">
//         <div> Flight Number: { props.record._id } </div>
//       </div>
//       <div className="duration">
//         <div> Flight Duration: { props.record.duration } </div>
//       </div>
//       <div className="instructor">
//         <div> Flight Instructor: { props.record.instructor } </div>
//       </div>
//       <div className="timeOfDay">
//         <div> Date: { new Date().toLocaleDateString() } </div>
//       </div>
//       <div className="tailNumber">
//         <div> Aircraft Tail Number: { props.record.tailNumber } </div>
//       </div>
//       <div className="type">
//         <div> Aircraft Type: { props.record.type } </div>
//       </div>
//     </div>
//   );
// }




export default EachRecord;