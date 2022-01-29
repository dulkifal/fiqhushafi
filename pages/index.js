

import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/footer'
import Navbar from '../comps/navbar'
 
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Fatwas</title>
    </Head>
    
    <div className='container h-80'>
       
      <h1 className= ''>Home Page</h1>
      <p className= ''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, molestiae, ipsum, adipisci est totam quod voluptates deserunt vero dolorem iure minima! Odio culpa quos inventore pariatur. Doloremque, repellat consequuntur. Voluptas!</p>
      <Link href="/fatwas">
        <a className= ''> See more Fatwas</a>
      </Link>
       
      
    </div>
    </>
  )
}
