
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { IoIosMenu, IoIosClose } from "react-icons/io"



const navigation = [
  { name: 'الرئيسة', href: '/', current: false },
  { name: ' السؤال', href: '/notes/ask', current: false },
  { name: 'الفتاوى', href: '/notes', current: false },
  { name: 'المقالات', href: '/fatwas', current: false },
  { name: 'الإجابة', href: '/fatwas', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <>
      {/* small screen */}
      <Disclosure as="nav" dir='rtl' className="bg-white-500 text-blue-900" >
        {({ open }) => (
          <>
            <div className="w-full mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between ">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className=" inline-flex items-center   justify-center p-2 rounded-md text-black  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">

                    {open ? (
                      <IoIosClose />) : (
                      <IoIosMenu />)}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">

                  {/* icon */}
                  <a href='/admin' className='w-1/5'>
                    <span className="text-2xl tracking-tight text-blue-900  absolute right-1 top-1 md:m-3">الفقه
                      الشافعي</span>
                  </a>


                  {/* big screen */}
                  <div className="w-0 md:w-auto sm:ml-6   overflow-hidden">

                    <div className="flex space-x-4 ">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'text-blue-600' : 'text-blue-900  m-2',
                            'px-6 py-2 rounded-md bg-gray-100  font-medium shadow-inner hover:underline'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}

                    </div>
                  </div>
                  <a href='/search' >

                    <svg className="w-5 m-3 shadow-inner" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7">
                      <title id="title">Search Icon</title><desc id="desc">A magnifying glass icon.</desc><g className=" " fill="none" stroke="#848F91">
                        <path strokeLinecap="square" d="M18.5 18.3l-5.4-5.4" /><circle cx="8" cy="8" r="7" /></g></svg>
                  </a>
                </div>
                <div>

                </div>
              </div>
            </div>
            {/* small screen */}
            <Disclosure.Panel data-aos="fade-down" className="  absolute z-10 top-12  h-1/2 py-6 w-1/3 text-center ">
              <div className=" px-2 pt-2 pb-3 space-y-1 shadow-inner  bg-gray-100">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? ' ' : 'border-b border-gray-300',
                      'block px-3 leading-10  text-sm rounded-md   font-medium hover:underline'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}

      </Disclosure>
    </>
  )
}