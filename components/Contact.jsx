"use client";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:anshsrivasrava2004@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}%0A%0AReply to: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <div id="contact" className="w-11/12 max-w-2xl mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
        Contact Me
      </h1>

      <p className="text-lg text-gray-700 text-center mb-6">
        Feel free to reach out to me via email or by filling out the form below.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-4"
      >
        {/* Name Input */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3 border rounded-lg bg-gray-100 focus:ring focus:ring-blue-500"
        />

        {/* Email Input */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-3 border rounded-lg bg-gray-100 focus:ring focus:ring-blue-500"
        />

        {/* Message Input */}
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="p-3 border rounded-lg bg-gray-100 focus:ring focus:ring-blue-500"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
