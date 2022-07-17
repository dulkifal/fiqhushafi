import styles from '../../styles/fatwas.module.css'
import Link from 'next/link';

export const getServerSideProps  = async ({req}) => {
    const protocol = req.headers['x-forwarded-proto'] || 'http'
    const baseUrl = req ? `${protocol}://${req.headers.host}` : ''

    const res = await fetch(`${baseUrl}/parsed.json`);
    const data = await res.json()
    
     return {
        props: { fatwas: data }
    }
}

const Fatwas = ({ fatwas } ) => {
     
    return (
        <div className='lg:p-6 '>
            
          {fatwas && fatwas.map(fatwa => (
                    // eslint-disable-next-line react/jsx-key
                    <div className={styles.single } >
                       <div className='lg:p-6'>

                            <h2>{fatwa.msg}</h2>
                        <p>{fatwa.id}</p>
                       </div>
                        
                    </div>
              )) } 
        </div>
    );
}

export default Fatwas; 

 