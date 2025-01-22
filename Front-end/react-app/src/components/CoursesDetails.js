import React from "react";
import "../css/CourseCard.css";
import image from "../Images/React.jpg";

function CourseCard() {
  return (
    <div className="course-card">
      <div className="course-header">
        <div className="course-title">
          <h1>The Complete Python Bootcamp From Zero to Hero in Python</h1>
          <p>
            Learn Python like a professional! Start from the basics and go all the way to creating your own applications and games.
          </p>
        </div>
        <div className="course-video">
          <img src={image} alt="Preview" />
        </div>
      </div>

      <div className="course-info">
        <div className="course-price">
          <span className="price">₹4499</span>
          <span className="original-price">₹7,099</span>
          <span className="discount">86% off</span>
          <div className="offer-expiry">
            <p>5 hours left at this price!</p>
          </div>
        </div>
        <div className="course-duration">
          <span>Duration: 6 months</span>
        </div>
        <button className="add-to-cart-btn">Register</button>
      </div>

      <div className="course-learn">
        <h2>What you'll learn</h2>
        <ul>
          <li>Leverage the power of Python to solve tasks efficiently.</li>
          <li>Use Python for work problems or personal projects.</li>
          <li>Learn advanced Python features like collections and timestamps.</li>
          <li>Create a portfolio of Python-based projects to showcase.</li>
          <li>Learn both Python 2 and Python 3 professionally.</li>
        </ul>
      </div>

      <div className="accordion-section">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Course Content Overview
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Explore detailed topics, projects, and exercises included in this course.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Who is this course for?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Suitable for beginners, professionals, and anyone eager to master Python.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                FAQs
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Get answers to the most common questions about the course and its content.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
