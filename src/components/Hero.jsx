import React from "react";
import profileImg from "/Container1.png";

const Hero = () => {
  return (
    <>
      <section className="hero py-4 my-5" id="home">
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
    <section className="statistics py-5 my-5">
  <div className="container">
    <div className="row">
      <div className="col-md-3 col-6 mb-4 text-start">
        <h2 className="stat-number">100+</h2>
        <p className="stat-desc" style={{ textAlign: "justify" }}>
          Design solutions brought to life with precision and creativity
        </p>
      </div>
      <div className="col-md-3 col-6 mb-4 text-start">
        <h2 className="stat-number">50+</h2>
        <p className="stat-desc" style={{ textAlign: "justify" }}>
          Trusted by clients who value quality design and seamless
          collaboration
        </p>
      </div>
      <div className="col-md-3 col-6 mb-4 text-start">
        <h2 className="stat-number">2+</h2>
        <p className="stat-desc" style={{ textAlign: "justify" }}>
          Years of dedicated experience in crafting exceptional digital
          experiences
        </p>
      </div>
      <div className="col-md-3 col-6 mb-4 text-start">
        <h2 className="stat-number">88</h2>
        <p className="stat-desc" style={{ textAlign: "justify" }}>
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
