import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  const onNameChange = (e) => setName(e.target.value)
  const onPhoneChange = (e) => setPhone(e.target.value)
  const onEmailChange = (e) => setEmail(e.target.value)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        id="name" 
        name="name" 
        value={name}  
        onChange={onNameChange} 
        required />
        <input 
        type="tel" 
        id="phone" 
        name="phone" 
        value={phone} 
        pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}" 
        onChange={onPhoneChange} 
        placeholder="Contact Phone (###-###-####)" 
        required />
        <input 
        type="email" 
        id="email" 
        name="name"
        value={email} 
        onChange={onEmailChange} 
        required />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};
