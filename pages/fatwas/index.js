import styles from '../../styles/fatwas.module.css'
import Link from 'next/link';
import { server } from '../../next.config';

export const getStaticProps = async () => {
    const res = await fetch(`${server}/json.json`);
    const wres = await fetch(`${server}/api/question`);
    const data = await res.json()
     return {
        props: { fatwas: data }
    }
}

const Fatwas = ({ fatwas } ) => {
     
    return (
        <div>
            <h1> All fatwas</h1>
          {fatwas && fatwas.map(fatwa => (
                    // eslint-disable-next-line react/jsx-key
                    <div className={styles.single }>
                    
                       
                           
                            <h2>{fatwa.q}</h2>
                        <p>{fatwa.p}</p>
                        
                    </div>
              )) } 
        </div>
    );
}

export default Fatwas; 