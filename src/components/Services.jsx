
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
      color: "#8d8d8d",
      fontSize: "0.9rem",
      transition: "color 0.3s ease",
    },
    subtitleHover: {
      color: "#000",
    },
  };

  return (
    <section style={styles.section} id="services">
      <div className="container">
        <div className="row align-items-start">
          {/* Kolom kiri */}
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
            <p style={{ ...styles.subtitle, fontSize: "1.2rem" }}>
              I offer creative support in areas where you need it most <br />—
              whether it's design.
            </p>
          </div>

          {/* Kolom kanan - cards */}
          <div className="col-md-6">
            <div className="row g-4">
              {services.map((service, idx) => (
                <div className="col-md-6" key={idx}>
                  <div
                    className="service-card"
                    style={styles.card}
                    onMouseEnter={(e) => {
                      Object.assign(e.currentTarget.style, styles.cardHover);
                      const p = e.currentTarget.querySelector("p");
                      if (p) Object.assign(p.style, styles.subtitleHover);
                    }}
                    onMouseLeave={(e) => {
                      Object.assign(e.currentTarget.style, styles.card);
                      const p = e.currentTarget.querySelector("p");
                      if (p) Object.assign(p.style, styles.subtitle);
                    }}
                  >
                    <h5 className="fw-bold">{service.title}</h5>
                    <p style={styles.subtitle}>{service.desc}</p>
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
