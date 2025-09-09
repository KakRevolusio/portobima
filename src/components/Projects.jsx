import React, { useState } from "react";

const Project = () => {
  // Data JSON project (lebih banyak, total 27)
  const projects = [
    // UI/UX Design
    { id: 1, title: "Portfolio Design Page", desc: "Design portfolio modern dengan layout interaktif.", category: "UI/UX Design", image: "/Container1.png" },
    { id: 2, title: "Landing Page Bfree.ai", desc: "Landing page clean dengan fokus pada CTA.", category: "UI/UX Design", image: "/Container1.png" },
    { id: 3, title: "Mobile App Dashboard", desc: "UI mobile untuk aplikasi finansial.", category: "UI/UX Design", image: "/Container1.png" },
    { id: 4, title: "E-commerce Web Design", desc: "Desain e-commerce responsif.", category: "UI/UX Design", image: "/Container1.png" },
    { id: 5, title: "Booking Platform UI", desc: "Platform pemesanan dengan UX friendly.", category: "UI/UX Design", image: "/Container1.png" },
    { id: 6, title: "Learning App UI", desc: "UI aplikasi e-learning modern.", category: "UI/UX Design", image: "/Container1.png" },
    { id: 7, title: "Dashboard Admin Panel", desc: "UI clean untuk admin panel.", category: "UI/UX Design", image: "/Container1.png" },
    { id: 8, title: "Travel App UI", desc: "UI mobile untuk aplikasi travel.", category: "UI/UX Design", image: "/Container1.png" },
    { id: 9, title: "Healthcare App UI", desc: "UI aplikasi kesehatan responsif.", category: "UI/UX Design", image: "/Container1.png" },
    { id: 10, title: "Finance App UI", desc: "Desain mobile app untuk finansial.", category: "UI/UX Design", image: "/Container1.png" },

    // Social Media Design
    { id: 11, title: "Instagram Campaign", desc: "Feed Instagram interaktif untuk branding.", category: "Social Media Design", image: "/Container1.png" },
    { id: 12, title: "Facebook Ads", desc: "Desain iklan Facebook yang engaging.", category: "Social Media Design", image: "/Container1.png" },
    { id: 13, title: "TikTok Promo", desc: "Visual promosi untuk kampanye TikTok.", category: "Social Media Design", image: "/Container1.png" },
    { id: 14, title: "YouTube Thumbnail Pack", desc: "Thumbnail menarik untuk channel edukasi.", category: "Social Media Design", image: "/Container1.png" },
    { id: 15, title: "Twitter Banner", desc: "Banner branding untuk akun Twitter.", category: "Social Media Design", image: "/Container1.png" },
    { id: 16, title: "LinkedIn Post Design", desc: "Konten profesional untuk LinkedIn.", category: "Social Media Design", image: "/Container1.png" },
    { id: 17, title: "Pinterest Board Design", desc: "Desain pin kreatif untuk Pinterest.", category: "Social Media Design", image: "/Container1.png" },
    { id: 18, title: "Snapchat Story Design", desc: "Story visual untuk Snapchat campaign.", category: "Social Media Design", image: "/Container1.png" },
    { id: 19, title: "Social Media Kit", desc: "Paket desain media sosial lengkap.", category: "Social Media Design", image: "/Container1.png" },

    // Graphic Design
    { id: 20, title: "Poster Event", desc: "Desain poster untuk acara kampus.", category: "Graphic Design", image: "/Container1.png" },
    { id: 21, title: "Branding Kit", desc: "Paket branding lengkap untuk startup.", category: "Graphic Design", image: "/Container1.png" },
    { id: 22, title: "Packaging Design", desc: "Desain kemasan produk modern.", category: "Graphic Design", image: "/Container1.png" },
    { id: 23, title: "Flyer Cafe", desc: "Flyer promo untuk cafe baru.", category: "Graphic Design", image: "/Container1.png" },
    { id: 24, title: "Illustration Artwork", desc: "Ilustrasi vektor untuk kampanye digital.", category: "Graphic Design", image: "/Container1.png" },
    { id: 25, title: "Company Profile", desc: "Desain company profile elegan.", category: "Graphic Design", image: "/Container1.png" },
    { id: 26, title: "Business Card Design", desc: "Kartu nama profesional.", category: "Graphic Design", image: "/Container1.png" },
    { id: 27, title: "Logo Design Pack", desc: "Paket desain logo modern.", category: "Graphic Design", image: "/Container1.png" },
  ];
  const categories = ["UI/UX Design", "Social Media Design", "Graphic Design"];
  const [activeCategory, setActiveCategory] = useState("UI/UX Design");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const filteredProjects = projects.filter((p) => p.category === activeCategory);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstItem, indexOfLastItem);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <section
      id="projects"
      style={{ backgroundColor: "rgba(21, 21, 21, 1)", color: "#fff", padding: "60px 0" }}
    >
      <div className="container text-center">
        <h2 className="fw-bold mb-3" style={{ fontSize: "2.5rem" }}>
          Explore <span style={{ color: "rgba(168, 255, 54, 1)" }}>My Expert Portfolio</span> Of
          <br /> Creative Solutions
        </h2>
        <p style={{ color: "#aaa" }}>
          Whether it's designing a sleek user interface or writing code
        </p>

        {/* Filter */}
        <div className="d-flex justify-content-center gap-3 mt-4 mb-5 flex-wrap">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className="filter-btn"
              style={{
                backgroundColor: activeCategory === cat ? "rgba(168, 255, 54, 1)" : "rgba(40, 40, 40, 1)",
                color: activeCategory === cat ? "#000" : "#fff",
                border: "none",
                borderRadius: "20px",
                padding: "10px 20px",
                fontWeight: "500",
                cursor: "pointer",
                transition: "all 0.3s ease",
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
                  transition: "transform 0.3s ease",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: "100%", height: "250px", objectFit: "cover" }}
                />
                <div
                  className="overlay-text"
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    padding: "20px",
                    background: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))",
                    color: "#fff",
                    transition: "all 0.4s ease",
                  }}
                >
                  <h5>{project.title}</h5>
                  <p style={{ fontSize: "0.9rem" }}>{project.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dengan Next / Prev */}
        <div className="d-flex justify-content-center gap-2 mt-4 flex-wrap">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            style={{
              backgroundColor: "rgba(40, 40, 40, 1)",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              padding: "5px 12px",
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
                backgroundColor: currentPage === i + 1 ? "rgba(168, 255, 54, 1)" : "rgba(40, 40, 40, 1)",
                color: currentPage === i + 1 ? "#000" : "#fff",
                border: "none",
                borderRadius: "5px",
                padding: "5px 12px",
                cursor: "pointer",
              }}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            style={{
              backgroundColor: "rgba(40, 40, 40, 1)",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              padding: "5px 12px",
              cursor: currentPage === totalPages ? "not-allowed" : "pointer",
            }}
          >
            Next
          </button>
        </div>
      </div>

      <style>{`
        .project-card:hover { transform: translateY(-5px); }
        .project-card:hover .overlay-text { bottom: 30px; }
      `}</style>
    </section>
  );
};

export default Project;
