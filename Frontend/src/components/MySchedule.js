import React, { useState } from 'react'; // Import React and useState
import { Card } from 'react-bootstrap';
import DatePicker from 'react-datepicker'; // Ensure you import DatePicker from react-datepicker
import 'react-datepicker/dist/react-datepicker.css'; // Import CSS for DatePicker
import './MySchedule.css'; // Import your CSS file for additional styles

const MySchedule = () => { // Rename the component to avoid confusion with the imported DatePicker
  const [startDate, setStartDate] = useState(new Date()); // Initialize state for date

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>My Schedule <span>| Jobs interviews & Meetups</span></Card.Title>
   
        <div className="datepicker-container">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            inline
            popperPlacement="bottom"
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default MySchedule; // Export the component
