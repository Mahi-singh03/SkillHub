import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../css/CourseCard.css";
import courses from "./data/home_courses";

function CourseDetails() {
  const { courseID } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.courseID === parseInt(courseID));

  if (!course) {
    return <h2 className="text-center">Course not found</h2>;
  }

  const handleRegister = () => {
    navigate("/registration");
  };

  return (
    <div className="Course-Details">
      
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
        <h2 className="yellow">Syllabus</h2>


        <div className="accordion-section yellow">
          <div className="accordion yellow accordion-flush" id="accordionCourse">
            {course.courseSyllabus.map((module, index) => {
              const moduleID = `module-${index}`;
              return (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header yellow">
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
    </div>
  );
}

export default CourseDetails;