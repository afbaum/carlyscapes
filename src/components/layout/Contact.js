
import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, Label, Input, FormGroup, Form } from 'reactstrap';
import emailjs from 'emailjs-com';

const Contact = (props) => {
    const [open, setOpen] = useState(false);
    const [focusAfterClose, setFocusAfterClose] = useState(true);

    const toggle = () => setOpen(!open);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      const templateParams = {message, name, email, phone}

      console.log(process.env.REACT_APP_MY_EMAIL)

      emailjs.send(process.env.REACT_APP_MY_EMAIL,'contact_form', templateParams, process.env.REACT_APP_EMAILJS_API)
          .then(function(response) {
             console.log('SUCCESS!', response.status, response.text);
          }, function(err) {
             console.log('FAILED...', err);
          });
      setOpen(!open)
    }

    return (
        <div>
            <Form inline>
                <Button color="secondary" onClick={toggle}>Contact</Button>
            </Form>
            <Modal returnFocusAfterClose={focusAfterClose} isOpen={open}>
                <ModalBody>
                  <Form onSubmit={handleSubmit}>
                    <FormGroup>
                      <Label for="email">Email</Label>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange = {e => setEmail(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="name">Name</Label>
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        value={name}
                        onChange ={e => setName(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="phone">Phone Number</Label>
                      <Input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Phone Number"
                        value={phone}
                        onChange ={e => setPhone(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for='message'>Message</Label>
                      <Input
                        type="textarea"
                        name='message'
                        id='message'
                        value={message}
                        onChange ={e => setMessage(e.target.value)}/>
                    </FormGroup>
                  </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" type='submit' value="Submit" onClick={handleSubmit}>Submit</Button>
                    <Button color="primary" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default Contact;
