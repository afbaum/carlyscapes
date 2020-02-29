import React, { useState } from 'react';

const ContactForm = (props) => {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitting Name ${name} and ${phone} and ${email} and ${message}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:
        <input
          type="text"
          value={name}
          onChange ={e => setName(e.target.value)}/>
      </label>
      <label>Phone:
        <input
          type="text"
          value={phone}
          onChange ={e => setPhone(e.target.value)}/>
      </label>
      <label>Email:
        <input
          type="text"
          value={email}
          onChange ={e => setEmail(e.target.value)}/>
      </label>
      <label>Message:
        <input
          type="textarea"
          value={message}
          onChange ={e => setMessage(e.target.value)}/>
      </label>
      <input type='submit' value="Submit" />
    </form>
  )
}

export default ContactForm;
