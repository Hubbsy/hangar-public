import React from 'react';
import styled from 'styled-components'


const Title = styled.h2`
  color: #fff;
  font-weight: 300;
`
const Date = styled.div`
  color: #ccc;
  font-weight: 300; 
  margin: 6px 0;
`

const Description = styled.p`
  color: #fff;
  font-weight: 300;
`


const EachRecord = (props) => (
  <div className="eachRecord" >
    <Title>Today's Flight!</Title>
    <Date> 5/11/2020 </Date>
    <Description>
      Today was a great flight! We flew over the san juan mountains and stopped accross the border for lunch.  I took some great photos over the range!
    </Description>
  </div>
)




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