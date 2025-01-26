import React, { useState, useEffect } from "react";
import "../css/ReviewForm.css";

const ReviewForm = () => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch existing reviews
    fetch("http://localhost:5000/reviews")
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && review && rating) {
      fetch("http://localhost:5000/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, review, rating }),
      })
        .then((response) => response.json())
        .then((data) => {
          setReviews([...reviews, data]);
          setName("");
          setReview("");
          setRating(0);
        });
    }
  };

  const handleRating = (rating) => {
    setRating(rating);
  };

  return (
    <div className="review-section">
      <h2>Reviews</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Your Review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
        <div className="rating-container">
          <span>Rating:</span>
          {[1, 2, 3, 4, 5].map((rate) => (
            <span
              key={rate}
              className={`star ${rating >= rate ? "active" : ""}`}
              onClick={() => handleRating(rate)}
            >
              &#9733;
            </span>
          ))}
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="reviews-list">
        {reviews.map((rev, index) => (
          <div key={index} className="review-item">
            <h4>{rev.name}</h4>
            <div className="rating-container">
              {[1, 2, 3, 4, 5].map((rate) => (
                <span
                  key={rate}
                  className={`star ${rev.rating >= rate ? "active" : ""}`}
                >
                  &#9733;
                </span>
              ))}
            </div>
            <p>{rev.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewForm;
