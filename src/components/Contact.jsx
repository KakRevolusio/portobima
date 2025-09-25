import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-6 my-5 bg-light">
      <div className="container text-center">
        <h2 className="mb-4">Contact Me</h2>
        <form className="w-50 mx-auto">
          <input type="text" className="form-control mb-3" placeholder="Your Name" />
          <input type="email" className="form-control mb-3" placeholder="Your Email" />
          <textarea className="form-control mb-3" rows="4" placeholder="Your Message"></textarea>
          <button className="btn btn-primary w-100">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
