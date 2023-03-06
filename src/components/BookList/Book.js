import React from 'react'
import { Link } from 'react-router-dom'
import "./Book.css"

function Book({book}) {
  return (
    <div className='col-sm-2 book'>
    <div className="card mt-5" style={{width: "15rem,"}}>
  <img src={book.image} className="card-img-top  img-fluid" alt={""}/>
  <div className="card-body">
    <h5 className="card-title">Title: {book.title}</h5> 
    <p className="card-text">Author: {book.author}</p>
    <p className="card-text">Price {book.price}</p>
    <Link className='btn btn-primary' to={`/book/${book.id}`}>View</Link>
</div>
</div>
    </div> 
    
  )
}

export default Book