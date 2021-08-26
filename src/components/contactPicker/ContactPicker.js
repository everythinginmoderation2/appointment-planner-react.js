import React from "react";

export const ContactPicker = ({name, contacts, onContactChange}) => {
  return (
    <select name={name} onChange={onContactChange}>
    <option key={-1} value={''} selected="selected">Choose a contact</option>
      {contacts.map( (contact) => <option key={contact} value={contact}>{contact}</option>)}
    </select>
  );
};
