import React, { useState } from "react";
import projects from "../data/data";

const categories = ["UI/UX Design", "Social Media Design", "Graphic Design"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("UI/UX Design");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 9;
  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory
  );
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section
      id="projects"
      style={{
        backgroundColor: "rgba(21, 21, 21, 1)",
        color: "#fff",
        padding: "60px 0",
      }}
      className="py-6 my-5"
    >
      <div className="container text-center">
        {/* Header */}
        <h2 className="fw-bold mb-3" style={{ fontSize: "2rem" }}>
          Explore{" "}
          <span style={{ color: "rgba(168, 255, 54, 1)" }}>
            My Expert Portfolio
          </span>{" "}
          Of <br /> Creative Solutions
        </h2>
        <p
          style={{
            color: "#aaa",
            fontSize: "1rem",
            lineHeight: "1.6",
          }}
        >
          Whether it's designing a sleek user interface or writing code
        </p>

        {/* Filter */}
        <div className="d-flex justify-content-center gap-3 mt-4 mb-5 flex-wrap">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className="filter-btn"
              style={{
                backgroundColor:
                  activeCategory === cat
                    ? "rgba(168, 255, 54, 1)"
                    : "rgba(40, 40, 40, 1)",
                color: activeCategory === cat ? "#000" : "#fff",
                border: "none",
                borderRadius: "20px",
                padding: "10px 20px",
                fontWeight: "700",
                fontSize: "0.95rem",
                cursor: "pointer",
              }}
              onClick={() => {
                setActiveCategory(cat);
                setCurrentPage(1);
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="row g-4">
          {currentProjects.map((project) => (
            <div className="col-md-4" key={project.id}>
              <div
                className="project-card"
                style={{
                  position: "relative",
                  borderRadius: "15px",
                  overflow: "hidden",
                  backgroundColor: "#111",
                  cursor: "pointer",
                }}
                onClick={() => {
                  if (project.url) {
                    window.open(project.url, "_blank", "noopener noreferrer");
                  }
                }}
              >
                {/* Image 4:3 */}
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "4 / 3", // ✅ rasio 4:3
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Overlay Text */}
                <div
                  className="overlay-text"
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    padding: "15px",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))",
                    color: "#fff",
                    textAlign: "left",
                  }}
                >
                  <h5
                    style={{
                      fontSize: "1rem",
                      marginBottom: "5px",
                      whiteSpace: "nowrap", // ✅ hanya 1 baris
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      fontWeight: "700", // ✅ judul ditebalkan
                    }}
                  >
                    {project.title}
                  </h5>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      margin: 0,
                    }}
                  >
                    {project.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="d-flex justify-content-center gap-3 mt-5 mb-5 flex-wrap">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            style={{
              backgroundColor: "rgba(40, 40, 40, 1)",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "10px 18px",
              fontSize: "0.95rem",
              minWidth: "80px",
              cursor: currentPage === 1 ? "not-allowed" : "pointer",
            }}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              style={{
                backgroundColor:
                  currentPage === i + 1
                    ? "rgba(168, 255, 54, 1)"
                    : "rgba(40, 40, 40, 1)",
                color: currentPage === i + 1 ? "#000" : "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "10px 18px",
                fontSize: "0.95rem",
                minWidth: "50px",
                cursor: "pointer",
              }}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            style={{
              backgroundColor: "rgba(40, 40, 40, 1)",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "10px 18px",
              fontSize: "0.95rem",
              minWidth: "80px",
              cursor: currentPage === totalPages ? "not-allowed" : "pointer",
            }}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
