import React from "react";
import profileImg from "/Container1.png";

const Hero = () => {
  return (
    <>
      <section className="hero py-5 my-5" id="home">
        <div className="container">
          <h1 className="texhero">
            Hello i’m Beema
            <br />
            Digital Creative Designer
          </h1>

          {/* Hero Image */}
          <div className="hero-img overlap">
            <div className="neon-bg"></div>
            <img src={profileImg} alt="Profile" className="hero-img" />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
   <section
  className="statistics py-5 my-5"
  style={{ backgroundColor: "rgba(21, 21, 21, 1)", color: "#fff" }}
>
  <div className="container">
    <div
      className="row justify-content-between"
      style={{
        rowGap: "2rem", // jarak antar baris di tampilan mobile
        columnGap: "1.5rem", // jarak antar kolom horizontal
      }}
    >
      {/* Kolom 1 */}
      <div className="col-md-2 col-6 mb-4 text-start">
        <h2 className="stat-number mb-2" style={{ fontSize: "2.5rem" }}>
          100+
        </h2>
        <p className="stat-desc" style={{ textAlign: "justify", color: "#aaa" }}>
          Design solutions brought to life with precision and creativity
        </p>
      </div>

      {/* Kolom 2 */}
      <div className="col-md-2 col-6 mb-4 text-start">
        <h2 className="stat-number mb-2" style={{ fontSize: "2.5rem" }}>
          50+
        </h2>
        <p className="stat-desc" style={{ textAlign: "justify", color: "#aaa" }}>
          Trusted by clients who value quality design and seamless collaboration
        </p>
      </div>

      {/* Kolom 3 */}
      <div className="col-md-2 col-6 mb-4 text-start">
        <h2 className="stat-number mb-2" style={{ fontSize: "2.5rem" }}>
          2+
        </h2>
        <p className="stat-desc" style={{ textAlign: "justify", color: "#aaa" }}>
          Years of dedicated experience in crafting exceptional digital
          experiences
        </p>
      </div>

      {/* Kolom 4 */}
      <div className="col-md-2 col-6 mb-4 text-start">
        <h2 className="stat-number mb-2" style={{ fontSize: "2.5rem" }}>
          88
        </h2>
        <p className="stat-desc" style={{ textAlign: "justify", color: "#aaa" }}>
          Positive testimonials and glowing reviews received from delighted
          clients worldwide
        </p>
      </div>
    </div>
  </div>
</section>



    </>
  );
};

export default Hero;
