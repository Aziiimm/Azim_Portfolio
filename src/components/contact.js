import React, { useRef } from "react";
import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoDocument } from "react-icons/io5";
import emailjs from "emailjs-com";
import "../styles/contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
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
          toast("Email Sent!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "dark",
            progressClassName: "toastProgress",
          });
          console.log("SUCCESS");
        },
        (error) => {
          toast.error("Failed to Send", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "dark",
            className: "toastProgress",
          });
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

      <ToastContainer />

      <div className="contactGrid">
        <form className="contact-card" ref={form} onSubmit={sendEmail}>
          <span className="prompt">
            Name:
            <input
              className="field"
              placeholder="Your Name"
              type="text"
              name="name"
              required
            />
          </span>

          <span className="prompt">
            Email:
            <input
              className="field"
              placeholder="Your Email"
              type="email"
              name="email"
              required
            />
          </span>

          <span className="prompt">
            Message:
            <textarea
              className="message-field"
              placeholder="Your Message"
              name="message"
              required
            ></textarea>
          </span>
          <input type="submit" className="send" value="Send"></input>
        </form>

        <div>
          <section className="information-container">
            <div className="information">
              <div
                className="contact-type"
                onClick={() => {
                  toast("Email Copied to Clipboard!", {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                    theme: "dark",
                    progressClassName: "toastProgress",
                  });
                }}
                title="Copy My Email"
              >
                <MdEmail />
              </div>
              azimrahat108@gmail.com
            </div>

            <div className="information">
              <div
                className="contact-type"
                onClick={() => {
                  toast("Phone Number Copied to Clipboard!", {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                    theme: "dark",
                    progressClassName: "toastProgress",
                  });
                }}
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
                href="https://drive.google.com/file/d/1oP2GkQ5Bzxb4mmsAnD1dQJBtrf4oBnAL/view"
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
