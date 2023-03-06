import React from 'react'
import Book from '../BookList/Book'


function HomePage({ books }) {
const bookArray = books.map((book)=>{
    return( 
    <Book key={book.id} book={book}/>
    )
})
  return (
    
  <div className="row">
     {bookArray}
     </div>
    

  )
}

export default HomePage