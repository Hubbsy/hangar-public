import React from 'react';
import uniqId from 'uniqid';
import styled from 'styled-components'  
// import pics from '../assets/weather_icons/01W.svg'

const Title = styled.h2`
  color: #fff;
  font-weight: 300;
`

const Date = styled.div`
  color: #ccc;
  font-weight: 300; 
  ${'' /* margin: 6px 0; */}
`

const Description = styled.p `
  color: #fff;
  font-weight: 300;
`

const Action = styled.button `
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

const Actions = styled.div `
  color:#333; 
  display: flex; 
  align-items: center;
  svg {
    transform: translateY(2px);
    margin-right: 5px; 
  }
`

const StyledPhoto = styled.img `
  width: 100%; 
  height: 100%; 
  object-fit: cover;
  border: 1px;
  
`



const EachRecord = (props) => {
  console.log(props);

  return (
  <div className="eachRecord" >
    {/* <StyledPhoto src="../../../219467AD-CFC0-4458-9CE7-39175696EB35_1_105_c.jpeg" /> */}
    <Title> {props.record.name} </Title>
    <Date> {props.date}, {props.record.instructor} </Date>
    <Description> {props.record.type} </Description>
    <Actions>
      {props.actions.map(({label, ...props}) => (
        <Action key={uniqId()} {...props}> {label} </Action>
      ))}
    </Actions>
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