import React from 'react';
import './Contact.css';

const online = true;

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
        <div className={online ? "status-online" : "status-offline"}>        
          </div>
          <div className="status-text">
          {online ? "online" : "offline"}
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Contact;