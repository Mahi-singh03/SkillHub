import React from "react";
import { Link } from "react-router-dom";
import "../css/Courses.css";
import courses from "./data/COURS-DATA"; // Importing course data dynamically

const Courses = () => {
  return (
    <div className="container">
      <h1 className="text-center main-heading">All Courses</h1>
      <div className="row justify-content-center">
        {courses.map((course) => (
          <div key={course.courseID} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card_1">
              <img src={course.CourseImage} className="card-img-top_1" alt={course.courseName} />
              <div className="card-body_1 ">
                <h5 className="card-title_1">{course.courseName}</h5>
                <p className="card-text_1">{course.description}</p>
                <Link to={`/course/${course.courseID}`} className="btn btn-primary">
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
