import React from "react";
import profileImg from "/Container1.png";

const Hero = () => {
  return (
    <><section className="hero">
          <div className="container">
              <h1>
                  Hello i’m <span>Beema</span>
                  <br /> {/* harus ditutup seperti ini */}
                  Digital Creative Designer
              </h1>

              <div className="hero-img">
                  <div className="neon-bg"></div>
                  <img src={profileImg} alt="Profile" className="hero-img" />
              </div>
          </div>
      </section><section class="statistics py-2">
              <div class="container">
                  <div class="row text-center">
                      <div class="col-md-3 col-6 mb-4">
                          <h2 class="stat-number">100+</h2>
                          <p class="stat-desc">Design solutions brought to life with precision and creativity</p>
                      </div>
                      <div class="col-md-3 col-6 mb-4">
                          <h2 class="stat-number">50+</h2>
                          <p class="stat-desc">Trusted by clients who value quality design and seamless collaboration</p>
                      </div>
                      <div class="col-md-3 col-6 mb-4">
                          <h2 class="stat-number">2+</h2>
                          <p class="stat-desc">Years of dedicated experience in crafting exceptional digital experiences</p>
                      </div>
                      <div class="col-md-3 col-6 mb-4">
                          <h2 class="stat-number">88</h2>
                          <p class="stat-desc">Positive testimonials and glowing reviews received from delighted clients worldwide</p>
                      </div>
                  </div>
              </div>
          </section></>
  );
};

export default Hero;
