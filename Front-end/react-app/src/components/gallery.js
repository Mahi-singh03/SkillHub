import React from "react";
import "../css/gallery.css";




import pA from "../Images/gallery/p1.jpeg";
import pB from "../Images/gallery/p2.jpeg";
import pC from "../Images/gallery/p3.jpeg";
import pD from "../Images/gallery/p4.jpeg";
import pE from "../Images/gallery/p5.jpeg";




const Gallery = () => {
  return (
    <div className="gallery">
      <h1> Gallery</h1>
      <div>
      <img className="A" src={pA} alt="Gallery" />
    </div>
    <div>
      <img className="A" src={pB} alt="Gallery" />
    </div>
    <div className="side-by-side">
      <img className="c" src={pC} alt="Gallery" />
      <img className="c" src={pD} alt="Gallery" />
    </div>
    <div>
      <img className="A" src={pE} alt="Gallery" />
    </div>
    </div>
  );
};

export default Gallery;
