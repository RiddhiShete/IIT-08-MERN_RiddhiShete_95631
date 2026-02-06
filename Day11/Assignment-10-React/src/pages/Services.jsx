import React from "react";

function Services() {
  const services = [
    "React Training",
    "Java Full Stack",
    "MERN Stack",
    "Web Development"
  ];

  return (
    <div className="page">
      <h1>Services</h1>
      <ul>
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
