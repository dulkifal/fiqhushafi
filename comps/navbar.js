import Link from 'next/link'
import Image from 'next/image'
import connectSearchBox from './search'
import SearchFil from './search';
import Search from './search';

const Navbar = () => {
    return (
        <  >
         <div className='container h-5.5 bg-pri-color '>

           <h1 className='p-5 text-5xl text-center font-extrabold '>فقه الشافعية</h1>
         </div>
    
        <nav dir='rtl' className='flex space-x-4 bg-ter-color  '>
            
           <Link href="/"><a className='hover:bg-sec-color hover:text-white px-3 py-2 rounded-md'>الرئيسية</a></Link>
           <Link href="/fatwas"><a className='hover:bg-sec-color hover:text-white px-3 py-2 rounded-md'>المقالاة</a></Link>
           <Link href="/about"><a className='hover:bg-sec-color hover:text-white px-3 py-2 rounded-md'>About</a></Link>
           <Link href="/notes"><a className='hover:bg-sec-color hover:text-white px-3 py-2 rounded-md'>الفتاوى</a></Link>
           <Link href="/notes/create"><a className='hover:bg-sec-color hover:text-white px-3 py-2 rounded-md'>admin</a></Link>
           <Link href="/notes/ask"><a className='hover:bg-sec-color hover:text-white px-3 py-2 rounded-md'>السؤال</a></Link>

             <Search/>

        </nav>
        </>
    );
}

export default Navbar;