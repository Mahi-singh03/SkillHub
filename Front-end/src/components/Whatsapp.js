import React from 'react';

import '../css/Whatsapp.css'; // Import the CSS file

const WhatsAppContact = () => {
  const phoneNumber = '+919855146491';
  const  WhatsappNumber = "+9194639 26371"

  const message = 'Hello, I would like to know more about the Courses you provide.';
  const whatsappLink = `https://wa.me/${WhatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
  const callLink = `tel:${phoneNumber}`;

  return (
    <div className="contact-bar">
    
      <a href={callLink} className="contact-button call-button">
        Call Us
      </a>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-button whatsapp-button"
      >
        WhatsApp Us
      </a>
    </div>
  );
};

export default WhatsAppContact;
