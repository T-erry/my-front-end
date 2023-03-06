import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UpdateBook() {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:9292/books/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const { image, title, author, price } = data;
        setImage(image);
        setTitle(title);
        setAuthor(author);
        setPrice(price);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`http://localhost:9292/books/updatebook/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image,
        title,
        author,
        price,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setImage(data.image);
        setTitle(data.title);
        setAuthor(data.author);
        setPrice(data.price);
        navigate("/");
        document.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit} className="mx-auto">
      <input
        className="form-control mb-2 text-muted input"
        type="text"
        accept="image/png, image/jpeg"
        name="image"
        value={image}
        placeholder="Author"
        onChange={(event) => setImage(event.target.value)}
      />
      <input
        type="text"
        className="form-control mb-2 text-muted"
        value={title}
        name="title"
        placeholder="title"
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        className="form-control mb-2 text-muted"
        name="author"
        value={author}
        placeholder="author"
        onChange={(event) => setAuthor(event.target.value)}
      />
      <input
        type="number"
        className="form-control mb-2 text-muted mx-auto"
        name="price"
        value={price}
        placeholder="price"
        onChange={(event) => setPrice(event.target.value)}
      />
      <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-primary">
          update Book
        </button>
      </div>
    </form>
    </div>
    
  );
}

export default UpdateBook;
