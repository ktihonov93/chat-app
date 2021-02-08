import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="Contact">
      <img className="avatar"
        src="https://randomuser.me/api/portraits/women/80.jpg"
        alt="avatar"
      />
      <div>
        <div className="name">
          Marion Woods
          </div>
        <div className="status">
        <div className="status-online">
          </div>
          <div className="status-offline">
          </div>
          <div className="status-text">
            online
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Contact;