import React, { useState } from "react";
import styles from '../styles/Home.module.css'

export default function App() {
 

  const [query, setQuery] = useState({
    title: '', descri: ''
  });
  
  // Update inputs value
  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      
      [name]: value
    }));
  };
  // Form Submit function
  const formSubmit = (e) => {
    e.preventDefault();
     
    
    fetch("http://localhost:3000/api/notes", {
      method: "POST",
      headers:{
        'Accept': 'application/json',
        'contest-type': 'application/json'

      },
      body:  JSON.stringify(query)
    }).then(() => setQuery({ title: "", descri: "" }));
  };
  return (
    <div className="App">
      <h1>NextJS form using Getform.io</h1>
      <form onSubmit={formSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            
            placeholder="Name"
            className="form-control"
            value={query.name}
            onChange={handleParam()}
          />
        </div>
        
        <div>
          <label htmlFor="message">Message</label>
          <input
            type="text"
            name="message"
            
            placeholder="Message"
            className="form-control"
            value={query.message}
            onChange={handleParam()}
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}