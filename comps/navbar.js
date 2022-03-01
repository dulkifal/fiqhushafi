import Link from 'next/link'
import Image from 'next/image'
import connectSearchBox from './search'
import SearchFil from './search';
import Search from './search';

const Navbar = () => {
  return (
    <  >




      <nav dir='rtl' className=' flex justify-around text-sec-color space-x-4 '>
        <h1 className=' text-5xl text-center font-extrabold '>فقه الشافعية</h1>
        <div className='flex'>

          <div className='m-auto  mx-5'>
            <Link href="/"><a className='hover:bg-sec-color hover:text-white px-3 py-2 rounded-md'>الرئيسية</a></Link>
            <Link href="/fatwas"><a className='hover:bg-sec-color hover:text-white px-3 py-2 rounded-md'>المقالات</a></Link>
            <Link href="/about"><a className='hover:bg-sec-color hover:text-white px-3 py-2 rounded-md'>About</a></Link>
            <Link href="/notes"><a className='hover:bg-sec-color hover:text-white px-3 py-2 rounded-md'>الفتاوى</a></Link>
            {/* <Link href="/notes/create"><a className='hover:bg-sec-color hover:text-white px-3 py-2 rounded-md'>admin</a></Link> */}
            <Link href="/notes/ask"><a className='hover:bg-sec-color hover:text-white px-3 py-2 rounded-md'>السؤال</a></Link>


          </div>
          <div>
            <Search />
          </div>
        </div>



      </nav>
    </>
  );
}

export default Navbar;