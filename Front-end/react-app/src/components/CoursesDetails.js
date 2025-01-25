import React from "react";
import { useParams } from "react-router-dom";
import "../css/CourseCard.css";
import courses from "./data/COURS-DATA"; // Importing course data

function CourseCard() {
  const { courseID } = useParams(); // Get course ID from URL params
  const course = courses.find((c) => c.courseID === parseInt(courseID)); // Find course by ID

  if (!course) {
    return <h2 className="text-center">Course not found</h2>;
  }

  return (
    <div className="course-card">
      <div className="course-header">
        <div className="course-title">
          <h1>{course.courseName}</h1>
          <p>{course.description}</p>
        </div>
        <div className="course-video">
          <img src={course.CourseImage} alt={course.courseName} />
        </div>
      </div>

      <div className="course-info">
        <div className="course-price">
          <span className="price">₹{course.courseFee}</span>
          <span className="original-price">₹{Math.floor(course.courseFee * 1.5)}</span>
          <span className="discount">30% off</span>
        </div>
        <div className="course-duration">
          <span>Duration: {course.courseDuration}</span>
        </div>
        <button className="add-to-cart-btn">Register</button>
      </div>

      <div className="course-learn">
        <h2>What you'll learn</h2>
        <ul>
          {course.courseLearnings.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
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
                {course.courseSyllabus.map((module, index) => (
                  <div key={index}>
                    <h4>{module.module}</h4>
                    <ul>
                      {module.topics.map((topic, idx) => (
                        <li key={idx}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                ))}
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
                Suitable for beginners, professionals, and anyone eager to learn {course.courseName}.
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
                Get answers to common questions about {course.courseName} and its content.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
