import { useState } from "react";

export default function Sidebar() {
    const [extendNew, setExtendNew] = useState('hidden');
    const [extendMens, setExtendMens] = useState('hidden');
    const [extendWomens, setExtendWomens] = useState('hidden');

    return (
      <div className='w-2/6'>
        <div className='mobile:m-auto ml-2'>
          <h6 className='font-medium mb-2 text-xl capitalize tracking-widest text-black-400'>
            offer
          </h6>
          <h2 className='font-medium uppercase text-5xl leading-tight text-green-400'>
            off
          </h2>
          <div
            className='flex font-medium capitalize leading-tight relative after:absolute after:left-0 after:-bottom-3 after:h-1 after:w-52 after:bg-orange-400'
            style={{ content: '' }}
          >
            <h2 className='pr-2 text-xl text-gray-600'>upto</h2>
            <h2 className='text-6xl text-orange-400 animate-bounce'>20%</h2>
          </div>
          <h6 className='py-8 capitalize font-medium tracking-widest'>
            for all cosmatics
          </h6>
        </div>
        <div className='mobile:m-auto ml-3'>
          <ul className='my-5'>
            <li
              onClick={() =>
                setExtendNew(extendNew === 'hidden' ? 'h-auto' : 'hidden')
              }
              className='my-5'
            >
              <a className='menuTrigger cursor-pointer font-semibold hover:text-orange-200'>
                New
              </a>
              <ul
                className={`transition delay-500 ease-in-out subMenu ml-4 ${extendNew}`}
              >
                <li className='py-2 pt-5 '>
                  <a className='hover:text-orange-400' href='/'>
                    Cream
                  </a>
                </li>
                <li className='py-2'>
                  <a className='hover:text-orange-400' href='/'>
                    Oil
                  </a>
                </li>
                <li className='py-2 '>
                  <a className='hover:text-orange-400' href='/'>
                    Mask
                  </a>
                </li>
                <li className='py-2 '>
                  <a className='hover:text-orange-400' href='/'>
                    Lipstic
                  </a>
                </li>
                <li className='py-2 '>
                  <a className='hover:text-orange-400' href='/'>
                    Spray
                  </a>
                </li>
              </ul>
            </li>
            <li
              onClick={() =>
                setExtendMens(extendMens === 'hidden' ? 'h-auto' : 'hidden')
              }
              className='my-7'
            >
              <a className='menuTrigger cursor-pointer font-semibold hover:text-orange-200 '>
                For Mens
              </a>
              <ul
                className={`transition delay-500 ease-in-out subMenu ml-4 ${extendMens}`}
              >
                <li className='py-2 pt-5 '>
                  <a className='hover:text-orange-400' href='/'>
                    Cream
                  </a>
                </li>
                <li className='py-2'>
                  <a className='hover:text-orange-400' href='/'>
                    Oil
                  </a>
                </li>
                <li className='py-2 '>
                  <a className='hover:text-orange-400' href='/'>
                    Mask
                  </a>
                </li>
                <li className='py-2 '>
                  <a className='hover:text-orange-400' href='/'>
                    Lipstic
                  </a>
                </li>
                <li className='py-2 '>
                  <a className='hover:text-orange-400' href='/'>
                    Spray
                  </a>
                </li>
              </ul>
            </li>
            <li
              onClick={() =>
                setExtendWomens(extendWomens === 'hidden' ? 'h-auto' : 'hidden')
              }
            >
              <a className='menuTrigger cursor-pointer font-semibold hover:text-orange-200'>
                For Womens
              </a>
              <ul
                className={`transition delay-500 ease-in-out subMenu ml-4 ${extendWomens}`}
              >
                <li className='py-2 pt-5 '>
                  <a className='hover:text-orange-400' href='/'>
                    Cream
                  </a>
                </li>
                <li className='py-2'>
                  <a className='hover:text-orange-400' href='/'>
                    Oil
                  </a>
                </li>
                <li className='py-2 '>
                  <a className='hover:text-orange-400' href='/'>
                    Mask
                  </a>
                </li>
                <li className='py-2 '>
                  <a className='hover:text-orange-400' href='/'>
                    Lipstic
                  </a>
                </li>
                <li className='py-2 '>
                  <a className='hover:text-orange-400' href='/'>
                    Spray
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
}
