import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="#home">
          <img
            src="/logo.png"
            alt="Logo"
            style={{ height: "20px", width: "auto" }} // logo lebih kecil
          />
        </a>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-white"></span>
        </button>

        {/* Menu */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#faq">FAQ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
