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

export default Index;
export const getServerSideProps = async ({req}) => {
  const protocol = req.headers['x-forwarded-proto'] || 'http'
  const baseUrl = req ? `${protocol}://${req.headers.host}` : ''

  
  const res = await fetch(`${baseUrl}/api/notes/`);
  const data = await res.json();
  return{
  props: {  data }
}
}

