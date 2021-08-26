import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm"
import { TileList } from '../../components/tileList/TileList.js'

export const AppointmentsPage = ({
  contacts,
  appointments,
  addAppointment }) => {
  /* State variables for appointment info */
  const [currentTitle, setCurrentTitle] = useState('')
  const [contact, setContact] = useState(
    contacts.length > 0 ? contacts[0].name : "")
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Contact info s added and data is cleared */
    addAppointment(currentTitle, contact, date, time)
    setContact('')
    setCurrentTitle('')
    setDate('')
    setTime('')
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={contacts}
          contact={contact}
          setContact={setContact}
          setCurrentTitle={setCurrentTitle}
          currentTitle={currentTitle}
          setDate={setDate}
          date={date}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={appointments} />
      </section>
    </div>
  );
};
