

import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/footer'
import Navbar from '../comps/navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Fatwas</title>
    </Head>
    
    <div >
       
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, molestiae, ipsum, adipisci est totam quod voluptates deserunt vero dolorem iure minima! Odio culpa quos inventore pariatur. Doloremque, repellat consequuntur. Voluptas!</p>
      <Link href="/fatwas">
        <a className={styles.btn}> See more Fatwas</a>
      </Link>
       
      
    </div>
    </>
  )
}
