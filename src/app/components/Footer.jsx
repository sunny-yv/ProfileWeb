"use client";

import React from "react";
import data from "../data/data.json";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6" id="contact">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <p className="mb-2">
          Email:{" "}
          <a href={`mailto:${data.email}`} className="text-indigo-400">
            {data.email}
          </a>
        </p>
        <p className="mb-2">
          Phone:{" "}
          <a href={`tel:${data.phone}`} className="text-indigo-400">
            {data.phone}
          </a>
        </p>
        <p className="mb-4">Address: {data.address}</p>
        <div className="text-[16px] mb-[2rem] md:mb-0 text-white opacity-20">
          {data.copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
