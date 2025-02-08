import React, { useState, useEffect } from "react";
import "../css/ReviewForm.css";

const ReviewSystem = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  // Fetch reviews from the backend
  useEffect(() => {
    fetch("https://skillhub-a286.onrender.com/reviews")
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error("Error fetching reviews:", error));
  }, []);

  // Submit new review
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && comment && rating > 0) {
      const newReview = { name, comment, rating };

      try {
        const response = await fetch("https://skillhub-a286.onrender.com/reviews", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newReview),
        });

        if (response.ok) {
          const savedReview = await response.json();
          setReviews([savedReview, ...reviews]);
          setName("");
          setComment("");
          setRating(0);
        } else {
          console.error("Error submitting review:", response.statusText);
        }
      } catch (error) {
        console.error("Error submitting review:", error);
      }
    }
  };

  return (
    <div className="review-system">
      <form onSubmit={handleSubmit} className="review-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Rating:</label>
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={star <= rating ? "star active" : "star"}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Submit Review</button>
      </form>

      <div className="reviews-container">
        <h3>Recent Reviews ({reviews.length})</h3>
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="review-header">
              <span className="review-name">{review.name}</span>
              <span className="review-rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < review.rating ? "star active" : "star"}>★</span>
                ))}
              </span>
            </div>
            <p className="review-comment">{review.comment}</p>
            <div className="review-date">{new Date(review.date).toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSystem;
