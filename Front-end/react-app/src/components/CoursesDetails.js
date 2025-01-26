import React from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import "../css/CourseCard.css";
import courses from "./data/COURS-DATA"; // Importing course data

function CourseCard() {
  const { courseID } = useParams(); // Get course ID from URL params
  const navigate = useNavigate(); // Initialize navigate function
  const course = courses.find((c) => c.courseID === parseInt(courseID)); // Find course by ID

  if (!course) {
    return <h2 className="text-center">Course not found</h2>;
  }

  // Function to navigate to the Registration page
  const handleRegister = () => {
    navigate("/registration"); // Redirects to Registration.js
  };

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
        {/* Register Button - Calls handleRegister when clicked */}
        <button className="add-to-cart-btn" onClick={handleRegister}> 
          Register
        </button>
      </div>

      <div className="course-learn">
        <h2>What you'll learn</h2>
        <ul>
          {course.courseLearnings.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
      <h2>Syllabus</h2>

      {/* Dynamic Accordion */}
      <div className="accordion-section">
        <div className="accordion accordion-flush" id="accordionCourse">
          {course.courseSyllabus.map((module, index) => {
            const moduleID = `module-${index}`; // Unique ID for each module
            return (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${moduleID}`}
                    aria-expanded="false"
                    aria-controls={moduleID}
                  >
                    {module.module}
                  </button>
                </h2>
                <div
                  id={moduleID}
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionCourse"
                >
                  <div className="accordion-body">
                    <ul>
                      {module.topics.map((topic, idx) => (
                        <li key={idx}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
