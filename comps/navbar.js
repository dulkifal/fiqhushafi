import Link from 'next/link'
import Image from 'next/image'
import connectSearchBox from './search'
import SearchFil from './search';
import Search from './search';
 

const Navbar = () => {
    return (
        <  >
        <div className= "text-center bg-blue-400">

                    <h1 className='underline m-auto'>فقه الشافعية</h1>
        </div>
         
       
        <nav className=' '>
            
           <Link href="/"><a>Home</a></Link>
           <Link href="/fatwas"><a>Fatwas</a></Link>
           <Link href="/about"><a>About</a></Link>
           <Link href="/notes"><a>show</a></Link>
           <Link href="/notes/create"><a>create</a></Link>
             <Search/>

        </nav>
        </>
    );
}

export default Navbar;