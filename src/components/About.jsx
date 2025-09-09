import React from "react";

const About = () => {
  return (
    <section className="about py-5" id="about">
      <div className="container">
        <div className="row align-items-center">
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
            {/* Tombol download CV */}
            <a
              href="/CV.pdf" // pastikan file ada di folder public/cv.pdf
              download
              className="btn btn-cv mt-4"
            >
              <i className="bi bi-folder2-open"></i> Download CV
            </a>
          </div>

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
    </section>
  );
};

export default About;
