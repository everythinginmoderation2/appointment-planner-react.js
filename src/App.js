import React, {useState, useEffect} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import axios from 'axios'

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Defined state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([])
  const [appointments, setAppointments] = useState([]) 

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implemented functions to add data to
  contacts and appointments
  */
 function addContact(name, phone, email) {
  setContacts([
    ...contacts,
    {
      name,
      phone,
      email,
    },
  ]);
 }

 const addAppointment = (title, contact, date, time) => {
  setAppointments([
    ...appointments,
    {
      title,
      contact,
      date,
      time,
    },
  ]);
};

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage 
            contacts={contacts} 
            addContact={addContact}
            />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage 
            contacts={contacts} 
            appointments={appointments} 
            addAppointment={addAppointment}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
