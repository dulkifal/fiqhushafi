import Link from 'next/link'
import Image from 'next/image'
import connectSearchBox from './search'
import SearchFil from './search';
import Search from './search';

const Navbar = () => {
    return (
        <  >
         <div className='container h-5.5 bg-slate-500 '>

           <h1 className='p-5 text-5xl text-center '>فقه الشافعية</h1>
         </div>
    
        <nav className='flex space-x-4   '>
            
           <Link href="/"><a className='hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md'>Home</a></Link>
           <Link href="/fatwas"><a className='hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md'>Fatwas</a></Link>
           <Link href="/about"><a className='hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md'>About</a></Link>
           <Link href="/notes"><a className='hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md'>show</a></Link>
           <Link href="/notes/create"><a className='hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md'>create</a></Link>
             <Search/>

        </nav>
        </>
    );
}

export default Navbar;