import React from "react";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: "rgba(21, 21, 21, 1)",
        color: "#aaa",
        paddingTop: "20px",
        paddingBottom: "40px", // tambahin ruang bawah
      }}
    >
      <div className="container d-flex justify-content-between">
        <p className="mb-0">Contact Me & Let’s Make It Happen.</p>
        <p className="mb-0">© {new Date().getFullYear()} All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
