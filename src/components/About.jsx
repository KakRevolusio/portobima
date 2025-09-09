import React, { useState } from "react";

const About = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="about py-5" id="about">
      <div className="container">
        <div className="row align-items-center">
          {/* Kolom kiri */}
          <div className="col-md-5 mb-4 mb-md-0">
            <h2 className="about-title">
              From Concept To Execution,{" "}
              <i
                className="bi bi-stars"
                style={{ color: "rgba(168, 255, 54, 1)" }}
              ></i>
              <br />
              I Help You Bring Your Dreams To Life
              <br />
              With <span>Modern Designs.</span>
            </h2>

            {/* Tombol Preview CV */}
            <button
              className="btn btn-cv mt-4"
              onClick={() => setShowModal(true)}
              style={{
                backgroundColor: "rgba(168, 255, 54, 1)",
                color: "#000",
                border: "none",
                borderRadius: "20px",
                padding: "10px 20px",
                fontWeight: "500",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              <i className="bi bi-eye"></i> Preview CV
            </button>
          </div>

          {/* Kolom kanan */}
          <div className="col-md-7" style={{ fontSize: "22px" }}>
            <p>
              Hello, I’m Bima, a{" "}
              <span className="highlight">Digital Creative</span> specializing
              in <span className="highlight">UI/UX Design and Graphic Design</span>, 
              with a <span className="highlight">degree in Informatics</span> from 
              Amikom University Yogyakarta and over 2 years of experience in the 
              design industry creative. I am skilled in designing clean, user-friendly, 
              and accessible interfaces for websites and mobile apps.
            </p>
            <p>
              I am also responsible, with strong time management skills, and experienced 
              in project management. With solid teamwork abilities, I can collaborate 
              effectively to ensure everything runs smoothly and prioritize tasks 
              efficiently.
            </p>
          </div>
        </div>
      </div>

      {/* Modal Preview */}
      {showModal && (
        <div
          className="modal-backdrop"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={() => setShowModal(false)} // klik backdrop untuk tutup
        >
          <div
            className="modal-content"
            style={{
              position: "relative",
              width: "80%",
              maxWidth: "900px",
              backgroundColor: "#111",
              borderRadius: "20px",
              overflow: "hidden",
              padding: "20px",
              textAlign: "center",
            }}
            onClick={(e) => e.stopPropagation()} // mencegah close saat klik isi modal
          >
            <h5 style={{ color: "#fff", marginBottom: "20px" }}>Preview CV</h5>

            {/* iframe CV */}
            <iframe
              src="/CV.pdf"
              title="CV Preview"
              style={{
                width: "100%",
                height: "600px",
                border: "none",
                borderRadius: "10px",
              }}
            ></iframe>

            {/* Tombol Close */}
            <button
              onClick={() => setShowModal(false)}
              style={{
                marginTop: "20px",
                backgroundColor: "rgba(168, 255, 54, 1)",
                color: "#000",
                border: "none",
                borderRadius: "20px",
                padding: "10px 20px",
                fontWeight: "500",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              <i className="bi bi-x-circle"></i> Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
