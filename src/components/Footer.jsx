import React from "react";

const Footer = () => {
  return (
    <footer
      className="footer py-3"
      style={{ backgroundColor: "rgba(21, 21, 21, 1)", color: "#aaa" }}
    >
      <div className="container d-flex justify-content-between">
        <p className="mb-0">Contact Me & Let’s Make It Happen.</p>
        <p className="mb-0">© {new Date().getFullYear()} All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
