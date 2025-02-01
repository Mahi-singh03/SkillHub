import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";
import im3 from "../Images/2Carsol.jpeg";
import im1 from "../Images/1carsol.JPG";
import im2 from "../Images/3Carsol.jpeg";
import im9 from "../Images/locatio.png";

// Importing Course Logos
import HTML from "../Images/CourseLOGO/HTML.jpg";
import REACT from "../Images/CourseLOGO/REACT.jpg";
import MERN from "../Images/CourseLOGO/MERN.jpg";
import Autocad from "../Images/CourseLOGO/Autocad.jpg";
import office from "../Images/CourseLOGO/office.jpg";
import coral from "../Images/CourseLOGO/coral.jpg";
import PS from "../Images/CourseLOGO/PS.png";

import out from "../Images/OUT.jpg";


import Whatsapp from "./Whatsapp";

// imprting staff images

import manoj from "../Images/staff/manoj.jpg";
import NMAM from "../Images/staff/NMAM.jpg";
import Aditya from "../Images/staff/Aditya.jpg";
import PMAM from "../Images/staff/PMAM.jpg";



import ReviewForm from "./ReviewForm";

const CourseCard = ({ image, title, description, link }) => (
  <div className="card" style={{ width: "18rem" }}>
    <img src={image} className="card-img-top" alt={`${title} course`} />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
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
      description:
        "3 months course covering all the concepts of HTML, CSS, and JS.",
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

      <div>
      < Whatsapp />
      </div>

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
              <h3>Skill development and training</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={im2}
              className="d-block w-100 cropped-img"
              alt="Second slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h3>Educationl support and carrer guidance</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={im3}
              className="d-block w-100 cropped-img"
              alt="Third slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h3>Innovation through computing</h3>
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
            
            />
          ))}
          <button className="add-to-cart-btn" >Register</button>
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
        <img className="location" src={im9}></img>

        <p>Chandigarh Chownk, Garhshankar, Hoshiarpur, Punajab</p>

        <div>
          <img src={out} alt="Outside view" />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d297.2833250180151!2d76.14618661509465!3d31.21245878727104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391abff81b0f5a21%3A0xa7b8d37a0c200b2e!2sSkill%20Up%20Institute%20of%20learning!5e0!3m2!1sen!2sin!4v1738394711503!5m2!1sen!2sin"            width="800"
            height="450"
            style={{ border: 1 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Staff section */}

      <h2>Our Staff</h2>

      <div className="card-container1">
        <div className="card1" style={{ width: '18rem' }}>
          <img src={manoj} className="card-img-top1" alt="manoj" />
          <div className="card-body1">
            <p className="Name1">Manoj Barhpagga</p>
            <p className="Designation1">Website designer</p>
          </div>
        </div>


        <div className="card1" style={{ width: '18rem' }}>
          <img src={NMAM} className="card-img-top1" alt="manoj" />
          <div className="card-body1">
            <p className="Name1">Neha</p>
            <p className="Designation1">Computer Teacher</p>
          </div>
        </div>

        <div className="card1" style={{ width: '18rem' }}>
          <img src={PMAM} className="card-img-top1" alt="manoj" />
          <div className="card-body1">
            <p className="Name1"> Parteeksha</p>
            <p className="Designation1">PTE Teacher </p>
          </div>
        </div>


        <div className="card1" style={{ width: '18rem' }}>
          <img src={Aditya} className="card-img-top1" alt="manoj" />
          <div className="card-body1">
            <p className="Name1"> Aditya Sharma</p>
            <p className="Designation1"> Social Media Manager</p>
          </div>
        </div>

      </div>

      {/* < ReviewForm /> */}
      <h2> Review us</h2>
    </div>
  );
};

export default App;
