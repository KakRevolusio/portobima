import React from "react";

const Services = () => {
  const services = [
    {
      title: "Graphic Design",
      desc: "Creating visually striking graphic designs that not only capture attention instantly, but communicate your message with clarity and impact.",
    },
    {
      title: "Branding & Visual",
      desc: "Crafting complete branding solutions and visual identities that not only look professionally distinctive, but strategically drive business growth and customer loyalty.",
    },
    {
      title: "UI/UX Design",
      desc: "Creating user-centered UI/UX designs that not only delight visually, but solve real problems and enhance user satisfaction at every touchpoint.",
    },
    {
      title: "Social Media Design",
      desc: "Creating visually compelling social media designs that capture attention, tell your brand story, and drive engagement across all social platforms.",
    },
  ];

  // style dasar
  const styles = {
    section: {
      backgroundColor: "rgba(21, 21, 21, 1)",
      color: "#fff",
      padding: "60px 0",
    },
    card: {
      backgroundColor: "rgba(40, 40, 40, 1)",
      color: "#fff",
      padding: "20px",
      borderRadius: "12px",
      height: "100%",
      transition: "all 0.3s ease",
      cursor: "pointer",
      boxShadow: "none",
    },
    cardHover: {
      backgroundColor: "rgba(168, 255, 54, 1)",
      color: "#000",
      boxShadow: "0 0 20px rgba(168, 255, 54, 0.6)",
    },
    subtitle: {
      color: "#aaa",
    },
  };

  return (
    <section style={styles.section} id="services">
      <div className="container">
        {/* GANTI align-items-center -> align-items-start */}
        <div className="row align-items-start">
          {/* Kolom kiri - teks */}
          <div className="col-md-6 mb-4">
            <h2 className="fw-bold mb-3">
              Here’s What <br />
              I Can Do To Help You <br />
              Bring{" "}
              <span style={{ color: "rgba(168, 255, 54, 1)" }}>
                Your Vision
              </span>{" "}
              To Life— <br />
              <span style={{ color: "rgba(168, 255, 54, 1)" }}>Simple</span>
            </h2>
            <p style={styles.subtitle}>
              I offer creative support in areas where you need it most—
              whether it's design.
            </p>
          </div>

          {/* Kolom kanan - cards */}
          <div className="col-md-6">
            <div className="row g-4">
              {services.map((service, idx) => (
                <div className="col-md-6" key={idx}>
                  <div
                    style={styles.card}
                    onMouseEnter={(e) =>
                      Object.assign(e.currentTarget.style, styles.cardHover)
                    }
                    onMouseLeave={(e) =>
                      Object.assign(e.currentTarget.style, styles.card)
                    }
                  >
                    <h5 className="fw-bold">{service.title}</h5>
                    <p style={{ fontSize: "0.9rem" }}>{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
