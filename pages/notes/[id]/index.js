 
import { useState, useEffect, createContext } from "react";
import router, { useRouter } from "next/router";
import styles from '../../styles/fatwas.module.css'
import axios from "axios";

const Note = ()=>{
  const [confirm, setConfirm]= useState(fasle);
  const [isDeleting, setDeleting]= useState(false);
  const router = useRouter();

  return( 
    <div>
      {
        isDeleting ? <h1>loading</h1>:
        <>
        <p>{data.title}</p>
        <p>{data.descri}</p>
        <button onClick={open}>delete</button>
        </>
      }
     
    </div>
  );
}

Note.getInitialProps = async ({query: {id}}) =>{
  const res = await axios(`http://localhost:3000/api/notes/${id}`);
  const {data} = await res.json();
  return {data}
}


