import React from 'react';


const Summary = (props) => {
  return (
    <div>
    <h2 className="summaryTitle">Flight Summary</h2>
      <div className="titles">Total Flight Hours</div>
      <div className="totalHours">450</div>
      <div className="titles">Types of Aircraft</div>
      <div className="totals">Cessna, King Air, Commander</div>
      <div className="titlesInstructor">Instructors</div>
      <div className="totals">Jim Duggan, Jef Hubbell, Patches O'Hoolihan</div>
      <div className="titles">Today's Weather</div>
      <div className="totals">Temp: 66, Wind: 5 Knots, Deck: 5000ft</div>
    </div>
  );
}






export default Summary;