import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/data";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="container text-center py-6">
        <h2>Project not found</h2>
        <Link to="/" className="btn btn-secondary mt-3">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <section
      style={{
        backgroundColor: "rgba(21,21,21,1)",
        color: "#fff",
        padding: "60px 0",
      }}
      className="py-6"
    >
      <div className="container">
        <h2 className="fw-bold mb-4">{project.title}</h2>
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            maxHeight: "400px",
            objectFit: "cover",
            borderRadius: "15px",
          }}
        />
        <p className="mt-4" style={{ fontSize: "1.1rem", color: "#aaa" }}>
          {project.desc}
        </p>

        <Link to="/" className="btn btn-success mt-3">
          Back to Projects
        </Link>
      </div>
    </section>
  );
};

export default ProjectDetail;
