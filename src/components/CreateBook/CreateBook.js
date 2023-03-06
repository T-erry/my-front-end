import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateBook() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    author: "",
    price: ""
  });

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [key]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { image, title, author, price } = formData;
    if (!image || !title || !author || !price) {
      alert("Please fill out all fields.");
      return;
    }
    console.log(formData);
    fetch("http://localhost:9292/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newBook) => newBook);
      navigate('/')
      document.location.reload();
  }

  const isFormValid = formData.image && formData.title && formData.author && formData.price;

  return (
    <div class ="card">
      <form onSubmit={handleSubmit} className="mx-auto">
      <input
        className="form-control mb-2 text-muted input"
        type="text"
        accept="image/png, image/jpeg"
        name="image"
        placeholder="Enter image_url..."
        onChange={handleChange}
      />
      <input
        type="text"
        onChange={handleChange}
        className="form-control mb-2 text-muted"
        name="title"
        placeholder="title"
      />
      <input
        type="text"
        onChange={handleChange}
        className="form-control mb-2 text-muted"
        name="author"
        placeholder="author"
      />
      <input
        type="number"
        onChange={handleChange}
        className="form-control mb-2 text-muted mx-auto"
        name="price"
        placeholder="price"
      />
      <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-primary" disabled={!isFormValid}>
          Add Book
        </button>
      </div>
    </form>
    </div>
    
  );
}

export default CreateBook;