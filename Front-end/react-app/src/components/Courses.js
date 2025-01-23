import React from "react";
import { Link } from "react-router-dom";
import "../css/Courses.css";


import HTML from "../Images/CourseLOGO/HTML.jpg";
import REACT from "../Images/CourseLOGO/REACT.jpg";
import MERN from "../Images/CourseLOGO/MERN.jpg";
import year from "../Images/CourseLOGO/1year.jpg";
import Autocad from "../Images/CourseLOGO/Autocad.jpg";
import office from "../Images/CourseLOGO/office.jpg";
import coral from "../Images/CourseLOGO/coral.jpg";
import tally  from "../Images/CourseLOGO/tallylogo.png";
import PS from "../Images/CourseLOGO/PS.png";
import PR from "../Images/CourseLOGO/PR.jpeg";
import WP from "../Images/CourseLOGO/WP.png";




const Courses = () => {
  const courses = [
    {
      image: HTML,
      title: "HTML, CSS and JS",
      description: "3 months course covering all the concepts of HTML, CSS, and JS",
      link: "#",
    },
    {
      image: REACT,
      title: "React JS",
      description: "6 months course covering complete frontend development with React.js",
      link: "#",
    },
    {
      image: Autocad,
      title: "Autocad 2D and 3D",
      description: "3,6,12 months course cover Design and drafting software for 2D and 3D",
      link: "#",
    },
    {
      image: MERN,
      title: "MERN Stack",
      description: "1-year course covering both frontend and backend from basics",
      link: "#",
    },
    {
      image: PR,
      title: "Premiere Pro",
      description: "Video editing software for professional films and video projects.",
      link: "#",
    },
    {
      image: PS,
      title: "Photoshop",
      description: "Image editing software for design, retouching, and graphic creation.",
      link: "#",
    }, 
    
    {
      image: office,
      title: "MS Office Suite",
      description: "3-month course covering MS Word, MS Excel, and MS PowerPoint",
      link: "#",
    },
    {
      image: coral,
      title: "CorelDRAW",
      description: " CorelDRAW Graphics Suite is all-in-one toolbox for endless creativity.",
      link: "#",
    },
    {
      image: tally,
      title: "Tally",
      description: "Optimize your business with Tally – simplicity meets performance!",
      link: "#",
    },
    
    
    {
      image: WP,
      title: "WordPress",
      description: "Website builder and CMS for blogs, e-commerce, and customization",
      link: "#",
    },

    {
      image: year,
      title: "Computer Application",
      description: "1-year course covering Office, Tally, Internet, and Computer Hardware",
      link: "#",
    },
  ];

  return (
    <div className="container">
      <h1 className="text-center main-heading">All Courses</h1>
      <div className="row justify-content-center">
        {courses.map((course, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card card1">
              <img src={course.image} className="card-img-top" alt="Course" />
              <div className="card-body card-body1">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
                <Link to={course.link} className="btn btn-primary">
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
