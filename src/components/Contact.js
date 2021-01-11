import React from "react";
import emailjs from "emailjs-com";
import { FaPhoneAlt, FaEnvelope, FaGithub } from "react-icons/fa";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qia3vom",
        "template_spdkx0s",
        e.target,
        "user_pJMU7WcFeFony37EBbzvk"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Thank you for your message!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="contact">
      <h1 className="table">CONTACT</h1>
      <div className="info">
        <p>
          <FaPhoneAlt /> 휴대폰: +82 10 8837 0342
        </p>
        <p>
          <FaEnvelope /> 이메일: j.ay@kakao.com
        </p>
        <p>
          <FaGithub /> GitHub: https://github.com/front-j
        </p>
      </div>
      <div className="form">
        <form className="contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <input
            type="text"
            id="name"
            name="from_name"
            placeholder="* Name"
          ></input>
          <input
            type="email"
            id="email"
            name="from_email"
            placeholder="* Email Address"
          ></input>
          <textarea
            type="text"
            id="message"
            name="message"
            placeholder="Message"
          ></textarea>
          <button type="submit" value="Send">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
