
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {IoIosMenu,IoIosClose} from "react-icons/io"
import Search from './search'


const navigation = [
  { name: 'الرئيسة', href: '/', current: false },
  { name: ' السؤال', href: '/notes/ask', current: false },
  { name: 'الفتاوى', href: '/notes', current: false },
  { name: 'المقالات', href: '/fatwas', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <>
   
    <Disclosure as="nav" dir='rtl' className="bg-green-500 text-blue-600" >
      {({ open }) => (
        <>
          <div className="w-full mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center text-2xl justify-center p-2 rounded-md text-white hover:text-white hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            
                  {open ? (
                    <IoIosClose/>) : (
                      <IoIosMenu/>)}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
               <div className='w-1/3 text-4xl' >

               <h1 className=''>فقه الشافعي</h1>
               </div>
               <div className='w-full sm:items-center sm:w-36'>

                   <Search/>
               </div>
                <div className="hidden sm:block sm:ml-6">
                  
                  <div className="flex space-x-4 ">
                    {navigation.map((item) => (
                      <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-blue-600 hover:bg-gray-700 hover:bg-green-100 m-2',
                        'px-2 py-2 rounded-md text-2xl font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                        >
                         {item.name}
                      </a>
                    ))}
                
                  </div>
                </div>
              </div>
             <div>
               
             </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:bg-white',
                  'block px-3 py-2 rounded-md text-2xl font-medium'
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