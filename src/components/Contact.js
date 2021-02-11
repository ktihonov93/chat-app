import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css';

function Contact({name, avatar, online}) {
  return (
    <div className="Contact">
      <img className="avatar"
        src={avatar}
        alt="avatar"
      />
      <div>
        <div className="name">
          {name}
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

Contact.propTypes = {

  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.bool,

};

export default Contact;