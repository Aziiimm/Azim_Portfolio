import React, { useState, useRef } from "react";
import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoDocument } from "react-icons/io5";
import emailjs from "emailjs-com";
import "../styles/contact.css";

const CustomAlert = ({ message }) => {
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
  const [alertMessage, setAlertMessage] = useState("");

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setAlertMessage(`${text} Copied to Clipboard!`);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 2500);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rxrcitq",
        "template_ysys6zc",
        form.current,
        "tNQjrtxheHsGqQ8pt"
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contactContainer">
      <h1 className="title">
        <span className="contactHead">Contact Me</span>
      </h1>

      {showAlert && <CustomAlert message={alertMessage} />}

      <div className="contactGrid">
        <form className="contact-card" ref={form} onSubmit={sendEmail}>
          <span className="prompt">
            Name:
            <input
              className="field"
              placeholder="Your Name"
              type="text"
              name="name"
            />
          </span>

          <span className="prompt">
            Email:
            <input
              className="field"
              placeholder="Your Email"
              type="email"
              name="email"
            />
          </span>

          <span className="prompt">
            Message:
            <textarea
              className="message-field"
              placeholder="Your Message"
              name="message"
            ></textarea>
          </span>
          <input type="submit" className="send" value="Send"></input>
        </form>

        <div>
          <section className="information-container">
            <div className="information">
              <div
                className="contact-type"
                onClick={() => copyToClipboard("azimrahat108@gmail.com")}
                title="Copy My Email"
              >
                <MdEmail />
              </div>
              azimrahat108@gmail.com
            </div>

            <div className="information">
              <div
                className="contact-type"
                onClick={() => copyToClipboard("3475707950")}
                title="Copy My Phone Number"
              >
                <MdLocalPhone />
              </div>
              347-570-7950
            </div>

            <div className="information-socials">
              <a
                className="contact-type"
                href="https://github.com/Aziiimm"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <AiFillGithub />
              </a>

              <a
                className="contact-type"
                href="https://www.linkedin.com/in/azim-rahat/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <AiFillLinkedin />
              </a>

              <a
                className="contact-type"
                href="https://drive.google.com/file/d/1lQSV71MsqMI7n5e8wtP6r3KD3VMR5pp4/view"
                target="_blank"
                rel="noopener noreferrer"
                title="Resume"
              >
                <IoDocument />
              </a>
            </div>
          </section>
        </div>
      </div>

      <div className="footer">Azim Rahat | 2024</div>
    </div>
  );
};

export default Contact;
