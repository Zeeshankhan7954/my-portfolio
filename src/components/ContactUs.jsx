import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_zz1k9p8";
    const template_id = "template_ou4uekl";
    const publicKey = "-TGna7A6CYKFtphW1";

    const template_params = {
      from_name: name,
      from_email: email,
      to_name: "Zeeshan",
      message: message,
    };

    emailjs
      .send(serviceId, template_id, template_params, publicKey)
      .then((response) => {
        console.log(response.status);
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Failed to send message", error);
        alert("Failed to send message!");
      });
  };

  return (
    <>
      <form className="form" name="enq" method="post" onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-group col-md-6">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              placeholder="Name"
              required
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group col-md-12">
            <textarea
              rows="5"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="form-control"
              placeholder="Your message"
              required
            ></textarea>
          </div>
          <div className="form-group col-md-12 text-center">
            <button type="submit" className="btn btn-outline-secondary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ContactUs;
