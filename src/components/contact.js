import React from 'react'
import '../styles/contact.css'

const Contact = () => {
  return (
    <div className = 'contactContainer'>

      <h1 id = 'contact' className = 'title'>
        <span className = 'contactHead'>
          Contact Me
        </span>
      </h1>

      <div className = 'contactGrid'>

        <div className = 'contact-card'>
          <span className = 'prompt'>
            Your Name:
          <input className = 'field'></input>
          </span>

          <span className = 'prompt'>
            Your Email:
          <input className = 'field'></input>
          </span>

          <span className = 'prompt'>
            Your Message:
          <input className = 'message-field'></input>
          </span>
        </div>

        <div>
          Hello
        </div>

      </div>






    </div>

  )
}

export default Contact
