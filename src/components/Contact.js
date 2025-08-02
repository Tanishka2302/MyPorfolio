import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_qmyc0fc',     // Replace with your EmailJS Service ID
      'template_809dbcx',    // Replace with your EmailJS Template ID
      formData,
      'IujdyPXYqZzc_Y00Q'         // Replace with your EmailJS Public Key
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Email sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    })
    .catch((err) => {
      console.error('FAILED...', err);
      alert('Failed to send message. Please try again later.');
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <div className="contact-container">
          <div className="contact-info">
            <div className="info-item">
              <FaEnvelope className="icon" />
              <div>
                <h3>Email</h3>
                <p>abc@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <FaPhone className="icon" />
              <div>
                <h3>Phone</h3>
                <p>+91 XXXXX XXXXX</p>
              </div>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h3>Location</h3>
                <p>Pune, India</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
