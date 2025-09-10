import React, { useState } from "react";

const About = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="about py-5" id="about">
      <div className="container">
        {/* HAPUS align-items-center supaya rata atas */}
        <div className="row">
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
            >
              <i className="bi bi-eye"></i> Preview CV
            </button>
          </div>

          {/* Kolom kanan */}
          <div className="col-md-7">
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
          onClick={() => setShowModal(false)}
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
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol Close di pojok kanan */}
            <button
              onClick={() => setShowModal(false)}
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                backgroundColor: "red",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                fontSize: "18px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              ×
            </button>

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
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
