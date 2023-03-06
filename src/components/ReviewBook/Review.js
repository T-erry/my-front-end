import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Review.css";




function Review() {
  const { id } = useParams();
  const [book, setBook] = useState([]);
  const [reviews, setReviews] = useState([])
  const navigate = useNavigate()


// Getting a single book 
  useEffect(() => {
    fetch(`http://localhost:9292/books/${id}`)
      .then((r) => r.json())
      .then((data) => setBook(data));
  },[id]);
  // Deleting a single book
  function handleDeleteClick() {
    fetch(`http://localhost:9292/deletebook/${id}`, {
      method: "DELETE",
    });
    navigate("/");
    document.location.reload();
  }
  // getting a review of each 
  useEffect(() => {
    fetch(`http://localhost:9292/reviews/${id}`)
      .then((r) => r.json())
      .then((data) => setReviews(data.reviews));
  }, [id]);

  return (
    <div id="review">
      <div id="reviewCard" className="card p-5">
        <div id="viewBook" className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={book.image}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h4 className="card-title">Title: {book.title}</h4>
                <p className="card-text">Author: {book.author}</p>
                <p className="card-text">Price: {book.price}</p>
                <Link to={`/updatebook/${id}`} id="addButtons" className="btn btn-secondary">update Book </Link>
                <button type="submit" 
                className="btn btn-secondary m-3"
                onClick={handleDeleteClick}
                >
                 Delete Book
             </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2>Book Rating</h2>
        {reviews.map((review) => (
          <div id="commentCard" key={review.id} className="card m-1">
            <div className="card-header">Comment on Book</div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>{review.comment}</p>
                <footer className="blockquote-footer">
                  <cite title="Source Title">Rate: {review.star_rating}</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        ))}
      </div>

  );
  
}

export default Review;