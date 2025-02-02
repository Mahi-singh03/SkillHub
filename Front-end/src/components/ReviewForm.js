import React, { useState } from 'react';

const ReviewSystem = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && comment && rating) {
      const newReview = {
        name,
        comment,
        rating,
        date: new Date().toLocaleString()
      };
      setReviews([newReview, ...reviews]);
      setName('');
      setComment('');
      setRating(5);
    }
  };

  return (
    <div className="review-system">
      <h2>Leave a Review</h2>
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
          <label htmlFor="rating">Rating:</label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          >
            {[5,4,3,2,1].map(num => (
              <option key={num} value={num}>{num} ★</option>
            ))}
          </select>
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
              <span className="review-rating">{'★'.repeat(review.rating).padEnd(5, '☆')}</span>
            </div>
            <p className="review-comment">{review.comment}</p>
            <div className="review-date">{review.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSystem;

// CSS Styles
const styles = `
  .review-system {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }

  .review-form {
    background: rgba(255, 255, 255, 0.9);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    margin-bottom: 30px;
  }

  .form-group {
    margin-bottom: 15px;
  }

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input, textarea, select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
  }

  textarea {
    height: 100px;
    resize: vertical;
  }

  .submit-btn {
    background: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background 0.3s ease;
  }

  .submit-btn:hover {
    background: #45a049;
  }

  .reviews-container {
    margin-top: 20px;
  }

  .review-card {
    background: rgba(255, 255, 255, 0.9);
    padding: 15px;
    margin-bottom: 15px;
    border-radius: 8px;
    box-shadow: 0 1px 5px rgba(0,0,0,0.1);
  }

  .review-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .review-name {
    font-weight: bold;
  }

  .review-rating {
    color: #ffb400;
    font-size: 1.2em;
  }

  .review-date {
    color: #666;
    font-size: 0.9em;
    margin-top: 10px;
  }

  @media (min-width: 768px) {
    .review-form {
      padding: 30px;
    }
    
    .form-group {
      margin-bottom: 20px;
    }

    input, textarea, select {
      padding: 10px;
    }

    .review-card {
      padding: 20px;
    }
  }

  @media (max-width: 480px) {
    .review-system {
      padding: 10px;
    }
    
    .review-header {
      flex-direction: column;
      align-items: flex-start;
    }
    
    .review-rating {
      margin-top: 5px;
    }
  }
`;

// Add styles to the document
const styleSheet = document.createElement('style');
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);