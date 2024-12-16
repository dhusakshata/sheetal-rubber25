import React from "react";
import "./career.css";

function CareerPage() {
  return (
    <div className="career-page">
      <h1>Work With Us</h1>
      <form className="career-form">
        {/* Name */}
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            placeholder="E.g. John Doe"
            required
          />
        </div>

        {/* Phone */}
        <div className="form-group">
          <label htmlFor="phone">Phone *</label>
          <div className="phone-input">
            <span>IN +91</span>
            <input
              type="tel"
              id="phone"
              placeholder="E.g. +91 9876543210"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            placeholder="E.g. john@doe.com"
            required
          />
        </div>

        {/* Position */}
        <div className="form-group">
          <label htmlFor="position">Position You Are Applying For *</label>
          <input
            type="text"
            id="position"
            placeholder="Enter the position name"
            required
          />
        </div>

        {/* Upload Resume */}
        <div className="form-group">
          <label htmlFor="resume">Upload Your Resume *</label>
          <input
            type="file"
            id="resume"
            accept=".pdf,.doc,.docx"
            required
          />
        </div>

        {/* Cover Letter */}
        <div className="form-group">
          <label htmlFor="cover-letter">Upload Your Cover Letter *</label>
          <input
            type="file"
            id="cover-letter"
            accept=".pdf,.doc,.docx"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="form-group">
          <button type="submit" className="submit-btn">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CareerPage;
