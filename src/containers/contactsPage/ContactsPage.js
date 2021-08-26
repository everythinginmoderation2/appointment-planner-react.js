import React, { useState, useEffect } from "react";
import { ContactForm } from '../../components/contactForm/ContactForm'
import { TileList } from '../../components/tileList/TileList.js'

export const ContactsPage = ({ contacts, addContact }) => {
  /* State variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [duplicate, setDuplicate] = useState(false)
  const [error, setError] = useState(null)

  //Duplicate check function declaration
  function isDuplicate() {
    const exists = contacts.find((contact) =>
      contact.name === name);
    if (exists !== undefined) {
      setDuplicate(true)
    }
  }

  const clearForm = () => {
    setName('');
    setPhone('');
    setEmail('');
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    /* Contact info is added and form data is cleared
    if the contact name is not a duplicate
    */
    if (!duplicate) {
      addContact(name, phone, email);
      clearForm();
    } else {
      setError('This contact already exists.');
    };

    if (error) { return error };
  }



  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    isDuplicate();
    if (duplicate) prompt('Please change name');
  }, [name, contacts, duplicate])

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        {duplicate ? " - Name Already Exists" : ""}
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};
