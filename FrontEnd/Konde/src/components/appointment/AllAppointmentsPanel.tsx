import React from 'react';

// Sample data structure for appointments
const appointments = [
  { id: 1, date: '2023-10-01', time: '10:00', patientName: 'John Doe' },
  { id: 2, date: '2023-10-02', time: '11:00', patientName: 'Jane Smith' },
  // Add more sample appointments as needed
];

const AllAppointmentsPanel = () => {
  return (
    <div>
      <h2>All Appointments</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            {appointment.date} - {appointment.time} - {appointment.patientName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllAppointmentsPanel;
