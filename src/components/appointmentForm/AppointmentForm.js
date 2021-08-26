import React from "react";
import { ContactPicker } from '../../components/contactPicker/ContactPicker'
//contact prop isn't used
export const AppointmentForm = ({
  contacts,
  title,
  setCurrentTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const onTitleChange = (e) => setCurrentTitle(e.target.value)
  const onDateChange = (e) => setDate(e.target.value)
  const onTimeChange = (e) => setTime(e.target.value)
  const onContactChange = (e) => setContact(e.target.value)

  const getContactName = () => {
    return contacts.map(contact => contact.name)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={onTitleChange}
          placeholder="Appointment Title"
          required />
        <br />
        <ContactPicker
          name="contact"
          value={contact}
          contacts={getContactName()}
          onContactChange={onContactChange}
          placeholder="Appointment With" />
        <br />
        <input
          type="date"
          id="date"
          name="date"
          min={getTodayString()}
          value={date}
          onChange={onDateChange}
          required />
        <input
          type="time"
          id="time"
          name="time"
          value={time}
          onChange={onTimeChange}
          required />
        <button
          type="submit"
          value="Add Appointment">Add Appointment</button>
      </form>
    </div>
  );
};
