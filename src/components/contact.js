import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoDocument } from "react-icons/io5";
import '../styles/contact.css'



const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="custom-alert">
      <div className="custom-alert-content">
        <p>{message}</p>
      </div>
    </div>
  );
};

const Contact = () => {

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setAlertMessage(`${text} Copied to Clipboard!`);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 2500);
  };

  return (
    <div className = 'contactContainer'>

      <h1 id = 'contact' className = 'title'>
        <span className = 'contactHead'>
          Contact Me
        </span>
      </h1>

      {showAlert && <CustomAlert message={alertMessage} />}

      <div className = 'contactGrid'>

        <div className = 'contact-card'>
          <span className = 'prompt'>
            Name:
          <input className = 'field' placeholder = 'Your Name'></input>
          </span>

          <span className = 'prompt'>
            Email:
          <input className = 'field' placeholder = 'Your Email'></input>
          </span>

          <span className = 'prompt'>
            Message:
          <textarea className = 'message-field' placeholder = 'Your Message'></textarea>
          </span>

          <button className = 'send' title = 'Send Message'>Send</button>

        </div>

        <div>
          <section className = 'information-container'>

            <div className = 'information'>
              <div className = 'contact-type' 
                onClick={() => copyToClipboard('azimrahat108@gmail.com')} title = 'Copy My Email'>
                <MdEmail/>
              </div>
              azimrahat108@gmail.com
            </div>

            <div className = 'information'>
              <div className = 'contact-type'
                onClick={() => copyToClipboard('3475707950')} title = 'Copy My Phone Number'>
                <MdLocalPhone/>
              </div>
              347-570-7950
            </div>

            <div className = 'information-socials'>
              <a className = 'contact-type'
                href = 'https://github.com/Aziiimm' 
                target='_blank' rel='noopener noreferrer'
                title = 'GitHub'
              ><AiFillGithub/></a>

              <a className = 'contact-type' 
                href = 'https://www.linkedin.com/in/azim-rahat/' 
                target='_blank' rel='noopener noreferrer'
                title = 'LinkedIn'
              ><AiFillLinkedin/></a>

              <a className = 'contact-type'
                href = 'https://drive.google.com/file/d/1lQSV71MsqMI7n5e8wtP6r3KD3VMR5pp4/view' 
                target='_blank' rel='noopener noreferrer'
                title = 'Resume'
              ><IoDocument/></a>
            </div>

          </section >
        </div>

      </div>

      <div className = 'footer'>
        Azim Rahat | 2024
      </div>






    </div>

  )
}

export default Contact
