import React, { useState } from "react";

const Experience = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const experiences = [
    {
      id: 1,
      position: "UIUX Designer at Amikom Business Park Startup Incubator",
      location: "Sleman, Indonesia",
      status: "Internship",
      duration: "6 months",
      description:
        "My responsibilities include developing wireframes, mockups, and interactive prototypes in accordance with brand guidelines and visual identity standards. I also conduct comprehensive user research to gather valuable insights and execute usability testing through Maze to guarantee that the final product provides users with an exceptional experience.",
    },
    {
      id: 2,
      position: "UIUX Designer at PT Media Sarana Data (GMedia)",
      location: "Sleman, Indonesia",
      status: "Internship",
      duration: "3 months",
      description:
        "Involved in creating user interfaces and conducting usability testing to enhance user experience.",
    },
    {
      id: 3,
      position: "Graphic Designer at Amikom Business Park Startup Incubator",
      location: "Sleman, Indonesia",
      status: "Internship",
      duration: "12 months",
      description:
        "Responsible for visual design, brand identity, and supporting digital marketing campaigns with high-quality graphics.",
    },
  ];

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="experience-section py-6 my-5"
      style={{ backgroundColor: "rgba(21, 21, 21, 1)", color: "#fff" }}
    >
      <div className="container">
        {/* Header */}
        <div className="row mb-5">
          <div className="col-md-6">
            <p
              style={{
                color: "#8d8d8d",
                fontSize: "1.5rem",
                textAlign: "justify",
              }}
            >
              Whether it's designing a sleek user interface or
              <br /> writing code that brings it to life,
            </p>
          </div>
          <div className="col-md-6 text-end">
            <h2 className="fw-bold" style={{ fontSize: "2.2rem" }}>
              A Yearly Snapshot Of My
              <br />
              <span style={{ color: "rgba(168, 255, 54, 1)" }}>
                Creative Growth
              </span>
            </h2>
          </div>
        </div>

        {/* Experience List */}
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className="experience-item py-6 border-bottom border-secondary"
          >
            {/* Baris Utama */}
            <div className="row align-items-start">
              {/* Kolom 1: Number + Position */}
              <div className="col-md-4 d-flex align-items-start">
                <h2 className="fw-bold me-3 mb-0">
                  {String(exp.id).padStart(2, "0")}
                </h2>
                <div>
                  <small style={{ color: "#aaa" }}>Position</small>
                  <p
                    className="mb-0"
                    style={{ fontSize: "1.1rem", textAlign: "justify" }}
                  >
                    {exp.position}
                  </p>
                </div>
              </div>

              {/* Kolom 2: Location */}
              <div className="col-md-2">
                <small style={{ color: "#aaa" }}>Location Work</small>
                <p
                  className="mb-0"
                  style={{ fontSize: "1.05rem", textAlign: "justify" }}
                >
                  {exp.location}
                </p>
              </div>

              {/* Kolom 3: Status */}
              <div className="col-md-2">
                <small style={{ color: "#aaa" }}>Work status</small>
                <p
                  className="mb-0"
                  style={{ fontSize: "1.05rem", textAlign: "justify" }}
                >
                  {exp.status}
                </p>
              </div>

              {/* Kolom 4: Duration + Button */}
              <div className="col-md-4 d-flex justify-content-between align-items-start">
                {/* Bagian kiri: Duration */}
                <div>
                  <small style={{ color: "#aaa" }}>Duration</small>
                  <p
                    className="mb-0"
                    style={{ fontSize: "1.05rem", textAlign: "justify" }}
                  >
                    {exp.duration}
                  </p>
                </div>

                {/* Bagian kanan: Tombol */}
                <div className="ms-auto">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="btn fw-bold px-4 py-4"
                    style={{
                      backgroundColor:
                        openIndex === index
                          ? "rgba(168, 255, 54, 1)"
                          : "rgba(40, 40, 40, 1)",
                      color: openIndex === index ? "#000" : "#8d8d8d",
                      borderRadius: "25px",
                    }}
                  >
                    {openIndex === index ? "Hide ▲" : "Show ▼"}
                  </button>
                </div>
              </div>
            </div>

            {/* Dropdown Deskripsi */}
            {openIndex === index && (
              <div className="row mt-3">
                <div className="col-md-8 offset-md-4">
                  <small style={{ color: "#aaa" }}>Job Description</small>
                  <p
                    style={{
                      fontSize: "1.05rem",
                      color: "#bbb",
                      textAlign: "justify",
                    }}
                  >
                    {exp.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
