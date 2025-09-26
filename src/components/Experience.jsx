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
    {
      id: 4,
      position:
        "Course Laboratory Assistant at University of Amikom Yogyakarta",
      location: "Sleman, Indonesia",
      status: "Internship",
      duration: "18 months",
      description:
        "Assisting students with lab activities, preparing learning materials, and maintaining academic software environments.",
    },
  ];

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="experience-section py-5"
      style={{ backgroundColor: "rgba(21, 21, 21, 1)", color: "#fff" }}
    >
      <div className="container">
        {/* Header */}
        <div className="row mb-5">
          <div className="col-md-6">
            <p
              style={{
                color: "#8d8d8d",
                fontSize: "1.4rem",
                lineHeight: "1.6rem",
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
            className="experience-item py-4"
            style={{
              borderBottom: "2px solid rgba(255, 255, 255, 0.05)", // 🔴 garis merah lembut (opacity 25%)
              marginBottom: "1.2rem",

            }}
          >
            {/* Baris Utama */}
            <div
              className="d-flex justify-content-between align-items-start"
              style={{ gap: "1.2rem" }}
            >
              {/* Kolom 1 */}
              <div
                className="d-flex align-items-start"
                style={{ flexBasis: "40%" }}
              >
                <h2
                  className="fw-bold me-3 mb-0"
                  style={{ fontSize: "2rem", color: "#fff" }}
                >
                  {String(exp.id).padStart(2, "0")}
                </h2>
                <div>
                  <small style={{ color: "#8d8d8d" }}>Position</small>
                  <p
                    className="mb-0 fw-semibold"
                    style={{
                      fontSize: "1.1rem",
                      lineHeight: "1.5rem",
                      textAlign: "left",
                    }}
                  >
                    {exp.position}
                  </p>
                </div>
              </div>

              {/* Kolom kanan */}
              <div
                className="d-flex justify-content-end align-items-start flex-wrap"
                style={{
                  flexBasis: "60%",
                  gap: "5rem",
                  textAlign: "right",
                }}
              >
                <div>
                  <small style={{ color: "#8d8d8d" }}>Location Work</small>
                  <p className="mb-0" style={{ fontSize: "1.05rem" }}>
                    {exp.location}
                  </p>
                </div>

                <div>
                  <small style={{ color: "#8d8d8d" }}>Work status</small>
                  <p className="mb-0" style={{ fontSize: "1.05rem" }}>
                    {exp.status}
                  </p>
                </div>

                <div>
                  <small style={{ color: "#8d8d8d" }}>Duration</small>
                  <p className="mb-0" style={{ fontSize: "1.05rem" }}>
                    {exp.duration}
                  </p>
                </div>

                <div>
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="btn fw-bold px-4 py-2"
                    style={{
                      backgroundColor:
                        openIndex === index
                          ? "rgba(168, 255, 54, 1)"
                          : "rgba(40, 40, 40, 1)",
                      color: openIndex === index ? "#000" : "#8d8d8d",
                      borderRadius: "25px",
                      fontSize: "1rem",
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
                  <small style={{ color: "#8d8d8d" }}>Job Description</small>
                  <p
                    style={{
                      fontSize: "1.05rem",
                      color: "#bbb",
                      lineHeight: "1.6rem",
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
