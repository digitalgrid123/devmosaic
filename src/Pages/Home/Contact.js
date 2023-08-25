import React from "react";
import mail from "../../Assets/Images/mail.svg";

function Contact() {
  return (
    <section id="contact">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <div className="contact_box">
              <h1 className="contact_heading bold">Contact Me</h1>
              <p className="contact_paragraph semiBold">
                If you are looking to hire a Frontend Developer, I’m currently
                available for freelance work
              </p>
              <button className="contact_btn">
                <a className="mail_link" href="mailto:m.bluth@example.com">
                  <img
                    className="mail_icon"
                    src={mail}
                    alt="mail_button"
                    loading="lazy"
                  />
                  m.bluth@example.com
                </a>
              </button>
            </div>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
