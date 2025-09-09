import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What services do you offer?",
      answer:
        "I specialize in web design, mobile app design, UI/UX design, branding & visual identity, graphic design, and social media design. I provide end-to-end creative solutions from concept to final execution."
    },
    {
      id: 2,
      question: "Can you redesign my existing website/brand?",
      answer:
        "Yes, I can help redesign your website or brand with a fresh and modern look while keeping your identity intact."
    },
    {
      id: 3,
      question: "Do you provide design consultation services?",
      answer:
        "Absolutely. I offer consultation sessions to help you identify design opportunities, improvements, and solutions."
    },
    {
      id: 4,
      question: "Can you help with print design as well as digital?",
      answer:
        "Yes, I create both print and digital designs, ensuring brand consistency across all media."
    },
    {
      id: 5,
      question: "How do you stay updated with design trends?",
      answer:
        "I keep up with the latest design blogs, attend workshops, and continuously explore new tools and techniques to stay current."
    }
  ];

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq"
      className="faq-section py-5"
      style={{ backgroundColor: "rgba(21, 21, 21, 1)", color: "#fff" }}
    >
      <div className="container">
        {/* Header */}
        <div className="row mb-5">
          <div className="col-md-6">
            <h2 className="fw-bold">
              Got <span style={{ color: "rgba(168, 255, 54, 1)" }}>Questions?</span>
              <br /> We’ve Got Answers.
            </h2>
          </div>
          <div className="col-md-6 text-end d-flex align-items-center">
            <p style={{ color: "#aaa" }}>
              Everything you need to know about our logistics services — fast,
              simple, and transparent.
            </p>
          </div>
        </div>

        {/* FAQ List */}
        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            className="faq-item py-4 border-bottom border-secondary"
          >
            {/* Row utama */}
            <div className="row align-items-start">
              <div className="col-md-10">
                <p className="mb-0 fw-medium">{faq.question}</p>
              </div>
              <div className="col-md-2 text-end">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="btn fw-bold px-4 py-2"
                  style={{
                    backgroundColor:
                      openIndex === index
                        ? "rgba(168, 255, 54, 1)"
                        : "rgba(40, 40, 40, 1)",
                    color: openIndex === index ? "#000" : "#fff",
                    borderRadius: "25px",
                  }}
                >
                  {openIndex === index ? "Hide ▲" : "Show ▼"}
                </button>
              </div>
            </div>

            {/* Dropdown jawaban */}
            {openIndex === index && (
              <div className="row mt-3">
                <div className="col-md-10">
                  <p style={{ fontSize: "0.9rem", color: "#bbb" }}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
