import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Review from "./components/ReviewBook/Review";
import HomePage from "./components/Pages/HomePage";
import NavBar from "./components/Navbar/NavBar";
import { useEffect, useState } from "react";
import CreateBooks from "./components/CreateBook/CreateBook";
import  UpdateBook from "./components/UpdateBook/UpdateBook"

function App() {
  const [books, SetBooks] = useState([])


  useEffect(() => {
      fetch("http://localhost:9292/books")
      .then((res)=> res.json())
      .then((data)=> SetBooks(data))
  },[])
   
  return (
   <div className="container">
    <div className="App">
    <BrowserRouter>
    <NavBar/>
    <Routes>
   <Route path="/" element={<Navigate to="/home"/>} />
    <Route path="/home" element={<HomePage books={books}/>} />
    <Route path="/createbook" element={<CreateBooks/>} />
    <Route path="/book/:id"  element={<Review />} />
    <Route path="/updatebook/:id"  element={<UpdateBook />} />
      </Routes>
    </BrowserRouter>
  
    </div>
  
   </div>
   
    
   
  
        
      
  );
}

export default App;