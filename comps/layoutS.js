import Head from 'next/head'
// import styles from './layout.module.css'
// import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Blog'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <div  >
      <Head>
        
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header  >
        {home ? (
          <>
            
             
            <h1  >{name}</h1>
          </>
        ) : (
          <>
            
            <h2   >
              <Link href="/">
               {name} 
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div  >
          <Link href="/">
           ← Back to home 
          </Link>
        </div>
      )}
    </div>
  )
}
