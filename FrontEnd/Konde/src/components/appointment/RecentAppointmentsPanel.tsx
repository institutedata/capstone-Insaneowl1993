import React from 'react';

// Define the appointment type
type Appointment = {
  id: number;
  date: string;
  time: string;
  patientName: string;
};

interface RecentAppointmentsPanelProps {
  appointments: Appointment[];
}

const RecentAppointmentsPanel: React.FC<RecentAppointmentsPanelProps> = ({ appointments }) => {
  // Sort and slice the appointments to get the most recent ones
  const recentAppointments = appointments
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6);

  return (
    <div>
      <h2>Recent Appointments</h2>
      <ul>
        {recentAppointments.map((appointment) => (
          <li key={appointment.id}>
            {appointment.date} - {appointment.time} - {appointment.patientName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentAppointmentsPanel;
