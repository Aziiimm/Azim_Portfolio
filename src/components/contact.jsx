import React, { useRef } from "react";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "emailjs-com";
import Socials from "./socials";
import "react-toastify/dist/ReactToastify.css";
import "../styles/contact.css";

const emailjsUserId = process.env.REACT_APP_EMAILJS_USER_ID;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rxrcitq",
        "template_ysys6zc",
        form.current,
        emailjsUserId
      )
      .then(
        () => {
          showToast("Email Sent!");
          console.log("SUCCESS");
        },
        (error) => {
          showToast("Failed to Send", true);
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  const showToast = (message, isError = false) => {
    const options = {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      theme: "dark",
      progressClassName: "toastProgress",
    };
    isError ? toast.error(message, options) : toast(message, options);
  };

  const copyToClipboard = (text, message) => {
    navigator.clipboard.writeText(text);
    showToast(message);
  };

  return (
    <section className="container" id="contact">
      <header>
        <h1 className="title">Contact Me</h1>
      </header>

      <ToastContainer />

      <div className="contactGrid">
        <form className="contact-card" ref={form} onSubmit={sendEmail}>
          <label className="prompt">
            Name:
            <input
              className="field"
              placeholder="Your Name"
              type="text"
              name="name"
              id="name"
              required
            />
          </label>

          <label className="prompt">
            Email:
            <input
              className="field"
              placeholder="Your Email"
              type="email"
              name="email"
              id="email"
              required
            />
          </label>

          <label className="prompt">
            Message:
            <textarea
              className="field"
              placeholder="Your Message"
              name="message"
              id="message"
              required
            ></textarea>
          </label>
          <button className="send" type="submit">
            Send
          </button>
        </form>

        <div>
          <section className="information-container">
            <button
              className="contact-type"
              onClick={() =>
                copyToClipboard(
                  "azimrahat108@gmail.com",
                  "Email Copied to Clipboard!"
                )
              }
              title="Copy My Email"
            >
              <MdEmail className="icon" aria-label="Copy Email" />
              azimrahat108@gmail.com
            </button>

            <button
              className="contact-type"
              onClick={() =>
                copyToClipboard(
                  "347-570-7950",
                  "Phone Number Copied to Clipboard!"
                )
              }
              title="Copy My Phone Number"
            >
              <MdLocalPhone className="icon" aria-label="Copy Phone Number" />
              347-570-7950
            </button>

            <Socials
              containerClass="information-socials"
              linkClass="footer-socials"
            />
          </section>
        </div>
      </div>

      <footer className="footer">Azim Rahat | 2024</footer>
    </section>
  );
};

export default Contact;
