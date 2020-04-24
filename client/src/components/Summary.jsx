import React from 'react';


const Summary = (props) => {
  return (
    <div className="summaryBox">
    <div className="centerBox">
    <h2 className="summaryTitle">Flight Summary</h2>
      <div className="titles">Total Flight Hours</div>
      <div className="totalHours">450</div>
      <div className="titles">Types of Aircraft</div>
      <div className="totals">Cessna, King Air, Commander</div>
      <div className="titlesInstructor">Instructors</div>
      <ul className="instructorTotals">
        <div>Jim Duggan</div>
        <div>Jeff Hubbell</div>
        <div>Patches O'Hoolihan</div>
      </ul>
      {/* <div className="titles">Today's Weather</div>
      <div className="totalsWeather">Temp: 66, Wind: 5 Knots, Deck: 5000ft</div> */}
      </div>
    </div>
  );
}






export default Summary;