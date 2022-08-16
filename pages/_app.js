import Layout from '../comps/layout'
import '../styles/globals.css'
import '../styles/font.css'
import AOS from 'aos';

import  {useEffect} from 'react'
import "aos/dist/aos.css";


 

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
}, []);
 
  return(
    <Layout>
      <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
      <script src="bower_components/aos/dist/aos.js"></script>
       
      
             <Component {...pageProps} />
     
    </Layout>
  )
}

export default MyApp
