import Link from "next/link";
import Box from '@material-ui/core/Box';


import styles from '../../styles/Home.module.css'

const Index = ({data}) => {

  
   return (
    <div>
   
      <div>
        {data.map(note => {
          return (
            <div key={note._id}>
               <div className= {styles.box}  >
    <Box     >
                <p>السوال</p>
                
              <p>{note.title}</p>
              <p>الجواب</p>
              <p>{note.descri}</p>
    </Box>
    </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
Index.getInitialProps = async () => {
  
  const res = await fetch("http://localhost:3000/api/notes/");
  const data = await res.json();
  return { data };
}

export default Index;
