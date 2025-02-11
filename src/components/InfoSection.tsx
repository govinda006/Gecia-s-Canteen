import React from "react";

const InfoSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row w-full justify-around gap-10 p-10">
      <div
        className="w-full max-w-sm p-4 rounded-lg shadow-md flex flex-col items-center justify-center"
        style={{
          marginBottom: "20px",
          height: "20vh",
          backgroundColor: "#04424D",
        }} // Adjust height
      >
        <h2 className="text-2xl font-semibold" style={{ color: "#fff" }}>
          Our Menu
        </h2>
        <p style={{ color: "#fff" }}>Explore our delicious offerings.</p>
      </div>
      <div
        className="w-full max-w-sm p-4 bg-white rounded-lg shadow-md flex flex-col items-center justify-center"
        style={{ marginBottom: "20px", height: "40vh" }} // Adjust height
      >
        <h2 className="text-2xl font-semibold" style={{ color: "#04424D" }}>
          Contact Us
        </h2>
        <p style={{ color: "#04424D" }}>Get in touch for more information.</p>
      </div>
      <div
        className="w-full max-w-sm p-4 bg-white rounded-lg shadow-md flex flex-col items-center justify-center"
        style={{ marginBottom: "20px", height: "20vh" }} // Adjust height
      >
        <h2 className="text-2xl font-semibold" style={{ color: "#04424D" }}>
          About Us
        </h2>
        <p style={{ color: "#04424D" }}>Learn more about our story.</p>
      </div>
      <div
        className="w-full max-w-sm p-4 bg-white rounded-lg shadow-md flex flex-col items-center justify-center"
        style={{ marginBottom: "20px", height: "40vh" }} // Adjust height
      >
        <h2 className="text-2xl font-semibold" style={{ color: "#04424D" }}>
          Services
        </h2>
        <p style={{ color: "#04424D" }}>Discover our services.</p>
      </div>
    </div>
  );
};

export default InfoSection;
