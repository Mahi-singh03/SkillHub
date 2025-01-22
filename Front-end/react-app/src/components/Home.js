import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import image_2 from "../Images/React.jpg";
import "../css/Home.css";
import im1 from '../Images/IMG_9070.JPG';
import im2 from '../Images/IMG_9071.JPG';


import HTML from "../Images/CourseLOGO/HTML.jpg"
import REACT from "../Images/CourseLOGO/REACT.jpg"
import MERN from "../Images/CourseLOGO/MERN.jpg"
import year from "../Images/CourseLOGO/1year.jpg"
import Autocad from "../Images/CourseLOGO/Autocad.jpg"
import office from "../Images/CourseLOGO/office.jpg"

const App = () => {
  const scrollLeft = () => {
    document.getElementById("card-slider").scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    document.getElementById("card-slider").scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="home-container">
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={im1} className="d-block w-100 cropped-img" alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={im2} className="d-block w-100 cropped-img" alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={im1} className="d-block w-100 cropped-img" alt="Third slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <h2>Available Courses</h2>

      <div className="card-slider-container">
        <button className="scroll-btn left" onClick={scrollLeft}>&lt;</button>
        <div id="card-slider" className="card-slider">
          
          <div className="card" style={{ width: '18rem' }}>
            <img src={HTML} className="card-img-top" alt="Card image" />
            <div className="card-body">
              <h5 className="card-title">HTML, CSS and JS</h5>
              <p className="card-text">3 months course covering all the concept of HTML, CSS and JS</p>
              <Link to="#" className="btn btn-primary">Details</Link>
            </div>
          </div>
          
          <div className="card" style={{ width: '18rem' }}>
            <img src={REACT} className="card-img-top" alt="Card image" />
            <div className="card-body">
              <h5 className="card-title">React JS</h5>
              <p className="card-text">6 months Course cover the complete frontend with the React js </p>
              <Link to="#" className="btn btn-primary">Details</Link>
            </div>
          </div>


            <div className="card" style={{ width: '18rem' }}>
            <img src={Autocad} className="card-img-top" alt="Card image" />
            <div className="card-body">
              <h5 className="card-title">Autocad 2D and 3D</h5>
              <p className="card-text">Design and drafting software in 2D and 3D CAD </p>
              <Link to="#" className="btn btn-primary">Details</Link>
            </div>
          </div>


          <div className="card" style={{ width: '18rem' }}>
            <img src={MERN} className="card-img-top" alt="Card image" />
            <div className="card-body">
              <h5 className="card-title">MERN Stack</h5>
              <p className="card-text">1 year course with Frontend and Backene from Basic </p>
              <Link to="#" className="btn btn-primary">Details</Link>
            </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
            <img src={year} className="card-img-top" alt="Card image" />
            <div className="card-body">
              <h5 className="card-title">Capmputer Aplication </h5>
              <p className="card-text">1 year course cover Office, Telly, Internent, Computer Hardware</p>
              <Link to="#" className="btn btn-primary">Details</Link>
            </div>
          </div>

       

          <div className="card" style={{ width: '18rem' }}>
            <img src={office} className="card-img-top" alt="Card image" />
            <div className="card-body">
              <h5 className="card-title">MS office Suite</h5>
              <p className="card-text">3 month coure  cover MS office (MS Word, MS Excel, MS powerpoint)</p>
              <Link to="#" className="btn btn-primary">Go somewhere</Link>
            </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
            <img src={image_2} className="card-img-top" alt="Card image" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="#" className="btn btn-primary">Go somewhere</Link>
            </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
            <img src={image_2} className="card-img-top" alt="Card image" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="#" className="btn btn-primary">Go somewhere</Link>
            </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
            <img src={image_2} className="card-img-top" alt="Card image" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="#" className="btn btn-primary">Go somewhere</Link>
            </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
            <img src={image_2} className="card-img-top" alt="Card image" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="#" className="btn btn-primary">Go somewhere</Link>
            </div>
          </div>
        </div>
        <button className="scroll-btn right" onClick={scrollRight}>&gt;</button>
      </div>

      <div className="see-all-btn-container">
        <Link to="/courses" className="see-all-btn">See All Courses</Link>
      </div>

      <h2>About Us</h2>

      <figure className="text-center">
        <blockquote className="blockquote">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales tortor vel neque facilisis suscipit...</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>
      </figure>
    </div>
  );
};

export default App;
