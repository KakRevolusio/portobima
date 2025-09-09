import React from "react";

const ContactSection = () => {
  return (
    <section id="contact"
      className="contact-section py-5"
      style={{ backgroundColor: "rgba(21, 21, 21, 1)", color: "#fff" }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Kiri: Text */}
          <div className="col-md-8">
            <h2 className="fw-bold mb-3">
              Our Idea, My Design — <br />
              <span style={{ color: "rgba(168, 255, 54, 1)" }}>
                Let’s Connect.
              </span>
            </h2>
            <p style={{ color: "#aaa" }}>
              Whether it's designing a sleek user interface or writing code
            </p>
          </div>

          {/* Kanan: Social Icons */}
          <div className="col-md-4 text-md-end text-start mt-4 mt-md-0">
            <p className="mb-2" style={{ color: "#aaa" }}>
              Stay Connected
            </p>
            <div className="d-flex gap-3 justify-content-md-end justify-content-start">
              <a href="https://wa.me/6281228944881" className="text-light fs-4">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="https://www.instagram.com/beemauix" className="text-light fs-4">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/bimakarunia" className="text-light fs-4">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://www.behance.net/beemauixstudio" className="text-light fs-4">
                <i className="bi bi-behance"></i>
              </a>
              <a href="https://www.linkedin.com/in/bimakarunia" className="text-light fs-4">
                <i className="bi bi-dribbble"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
