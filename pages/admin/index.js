import { useState, useEffect } from "react";
export default function adminPanel() {
  
  const [password, setPassword] = useState( '');
  const [admin, setAdmin] = useState( false);
  
  const getFromStorage = (key) => {
    if (typeof window !== 'undefined') {
      window.localStorage.getItem(key)
    }
  }

  useEffect(function () {
     if( window.localStorage.getItem('password') === 'admin') {
       setAdmin(true);
     }

  }, []);

  const logOut = () => {
    window.localStorage.removeItem('password');
    setAdmin(false);
  }
  
 const handleSumit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    
  }
  const handleChange = (e) => {
    setPassword({
     
      [e.target.name]: e.target.value
    })
    
  }
  
  return (
     
    <>
      
  <h1>adminPanel</h1>
  {admin ?
    
      <div className="flex-1 flex items-center justify-center gap-3">
  
  <a href="/notes/showQuestions">
          <button className="text-blue-900 px-6 py-2 rounded-md bg-gray-100  font-medium shadow-inner hover:underline">Questions</button></a>
  <a href="/notes/create">
          <button className="text-blue-900 px-6 py-2 rounded-md bg-gray-100  font-medium shadow-inner hover:underline">addAnswers</button></a>
           
            <button onClick={logOut} className="text-blue-900 px-6 py-2 rounded-md bg-gray-100  font-medium shadow-inner hover:underline">logOut</button> 
  </div>
   :
  <form  onSubmit={handleSumit}>

  <input type="text" name= "password"  onChange={ handleChange}/>
  <button onClick={e => {
    e.preventDefault();
    localStorage.setItem('password', password.password);
    setAdmin(true);
    
  }}
  type="submit">submit</button>
  </form>
    
}
    </>
  ) 
  }