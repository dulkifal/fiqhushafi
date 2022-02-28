import Layout from '../comps/layout'
import '../styles/globals.css'
import '../styles/font.css'
 
 

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
       <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
