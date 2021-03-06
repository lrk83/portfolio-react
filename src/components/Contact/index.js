import React, { useState, useEffect } from 'react';
import { validateEmail } from '../../utils/helpers';
import {Form, Button, Container} from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  useEffect(()=>{
    AOS.init({
      duration: 2000
    });
  });

  return (
    <section>
      <Container className="outer-container">
        <div className="my-3">
          <div data-aos="fade-in" data-aos-delay="200">
            <h2>Contact Info</h2>
            <ul>
              <li>Email: lrk83@cornell.edu</li>
              <li>Github: <a href="https://github.com/lrk83">github.com/lrk83</a></li>
              <li>LinkedIn: <a href="https://www.linkedin.com/in/lukas-keel/">linkedin.com/in/lukas-keel/</a></li>
            </ul>
          </div>
        </div>
        <div className="my-3">
          <div data-aos="fade-in" data-aos-delay="200">
            <h1 data-testid="h1tag">Contact Me</h1>
            <Form id="contact-form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="name">Name:</Form.Label>
                <Form.Control type="text" name="name" defaultValue={name} onBlur={handleChange} />
                
                </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="email">Email address:</Form.Label>
                <Form.Control type="email" name="email" defaultValue={email} onBlur={handleChange} />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="message">Message:</Form.Label>
                <Form.Control as="textarea" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                </Form.Group>
              {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
              <Button variant="primary" data-testid="button" type="submit">Submit</Button>
            </Form>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContactForm;