import React from "react";
import { Link } from "react-router-dom";
import image_2 from "../Images/React.jpg";
import "../css/Home.css";
import im1 from "../Images/IMG_9070.JPG";
import im2 from "../Images/IMG_9071.JPG";

// Importing Course Logos
import HTML from "../Images/CourseLOGO/HTML.jpg";
import REACT from "../Images/CourseLOGO/REACT.jpg";
import MERN from "../Images/CourseLOGO/MERN.jpg";
import year from "../Images/CourseLOGO/1year.jpg";
import Autocad from "../Images/CourseLOGO/Autocad.jpg";
import office from "../Images/CourseLOGO/office.jpg";
import coral from "../Images/CourseLOGO/coral.jpg";
import PS from "../Images/CourseLOGO/PS.png";

import out from "../Images/OUT.jpg";

const CarouselItem = ({ image, label, description }) => (
  <div className="carousel-item">
    <img src={image} className="d-block w-100 cropped-img" alt={label} />
    <div className="carousel-caption d-none d-md-block">
      <h5>{label}</h5>
      <p>{description}</p>
    </div>
  </div>
);

const CourseCard = ({ image, title, description, link }) => (
  <div className="card" style={{ width: "18rem" }}>
    <img src={image} className="card-img-top" alt={`${title} course`} />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <Link to={link || "#"} className="btn btn-primary">
        Details
      </Link>
    </div>
  </div>
);

const App = () => {
  const scrollLeft = () => {
    document
      .getElementById("card-slider")
      .scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    document
      .getElementById("card-slider")
      .scrollBy({ left: 300, behavior: "smooth" });
  };

  const courses = [
    {
      image: HTML,
      title: "HTML, CSS, and JS",
      description: "3 months course covering all the concepts of HTML, CSS, and JS.",
    },
    {
      image: REACT,
      title: "React JS",
      description: "6-month course covering React frontend development ",
    },
    {
      image: Autocad,
      title: "Autocad 2D and 3D",
      description: "Learn design and drafting in 2D and 3D CAD.",
    },
    {
      image: MERN,
      title: "MERN Stack",
      description: " course covering frontend and backend development .",
    },
 
    {
      image: office,
      title: "MS Office Suite",
      description: "3-month course covering MS Word, Excel, and PowerPoint.",
    },
    {
      image: coral,
      title: "CorelDRAW",
      description: "Comprehensive toolbox for endless creativity in design.",
    },
    {
      image: PS,
      title: "Photoshop",
      description: "Image editing software for design and graphic creation.",
    },
  ];

  return (
    <div className="home-container">
      {/* Carousel Section */}
  
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={im1}
              className="d-block w-100 cropped-img"
              alt="First slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={im2}
              className="d-block w-100 cropped-img"
              alt="Second slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={im1}
              className="d-block w-100 cropped-img"
              alt="Third slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Courses Section */}
      <h2>Available Courses</h2>
      <div className="card-slider-container">
        <button className="scroll-btn left" onClick={scrollLeft}>
          &lt;
        </button>
        <div id="card-slider" className="card-slider">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              image={course.image}
              title={course.title}
              description={course.description}
              link="/details"
            />
          ))}
        </div>
        <button className="scroll-btn right" onClick={scrollRight}>
          &gt;
        </button>
      </div>
      <div className="see-all-btn-container">
        <Link to="/courses" className="see-all-btn">
          See All Courses
        </Link>
      </div>

      {/* Map Section */}
      <h2>Visit Us</h2>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.113396926186!2d74.35858631464047!3d31.50613188138001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918e1c4c5e5f1e5%3A0x5c4e3c1b7e6c4f0e!2sGulberg%20III%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1625560490130!5m2!1sen!2s"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <img src={out} alt="Outside view" />
      </div>
    </div>
  );
};

export default App;
