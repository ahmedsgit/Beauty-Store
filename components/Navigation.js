import { SearchIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useRef, useState } from 'react';

export default function Navigation() {
  const [searchBarVisibility, setSearchBar] = useState('hidden');
  const [searchIcon, setIconDesign] = useState('visible');
  const [menuToggle, setMenuToggle] = useState(false);

  const ref = useRef(null);
  const handleSearch = e => {
    e.preventDefault();
    if (searchBarVisibility === 'hidden') {
      setSearchBar('visible');
      setIconDesign('hidden');
    } else {
      setSearchBar('hidden');
      setIconDesign('visible');
    }
    // console.log(ref.current.hidden);
  };
  const menuItem = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Catelogue',
      link: '/',
    },
    {
      name: 'payment',
      link: '/',
    },
    {
      name: 'shipping',
      link: '/',
    },
    {
      name: 'blog',
      link: '/',
    },
    {
      name: 'wishlist',
      link: '/',
    },
    {
      name: 'contact',
      link: '/',
    },
  ];
  return (
    <nav className='container mx-auto flex items-center justify-between py-16 '>
      <div className='capitalize text-black-400 text-xl'>
        <Link href='/'>
          <h1 className='ml-2 mobile:ml-0 cursor-pointer hover:scale-110 transition delay-150 duration-300 ease-in-out'>
            beauty store
          </h1>
        </Link>
      </div>
      <div className='desktop:flex hidden items-center '>
        <div>
          <Link href='/'>
            <a className='ml-10 text-sm hover:text-yellow-600'>Home</a>
          </Link>
          <Link href='/'>
            <a className='ml-10 text-sm hover:text-yellow-600 '>Catelogue</a>
          </Link>
          <Link href='/'>
            <a className='ml-10 text-sm hover:text-yellow-600'>Payment</a>
          </Link>
          <Link href='/'>
            <a className='ml-10 text-sm hover:text-yellow-600'>Shipping</a>
          </Link>
          <Link href='/'>
            <a className='ml-10 text-sm hover:text-yellow-600'>Blog</a>
          </Link>
          <Link href='/'>
            <a className='ml-10 text-sm hover:text-yellow-600'>Wishlist</a>
          </Link>
          <Link href='/'>
            <a className='ml-10 text-sm hover:text-yellow-600'>Contact</a>
          </Link>
        </div>
        <div className='flex items-center ml-64 '>
          <Link href='/'>
            <a className='ml-12 text-sm '>
              <UserIcon className='h-5 w-5 text-black hover:text-yellow-600 hover:animate-bounce' />
            </a>
          </Link>
          <Link href='/'>
            <div className='flex rounded-l-3xl group'>
              <a className='ml-12 text-sm'>
                <SearchIcon
                  onClick={handleSearch}
                  className={`${searchIcon} h-10 w-10 p-2 text-black hover:text-yellow-600 hover:animate-bounce`}
                />
              </a>
              <input
                ref={ref}
                id='searchfield'
                type='search'
                placeholder='Search...'
                autoFocus='autofocus'
                className={`${searchBarVisibility} w-40 text-grey-800 transition focus:visible focus:border-2 outline-white rounded-xl p-1 appearance-none leading-normal ease-in-out`}
              />
            </div>
          </Link>
          <Link href='/'>
            <a className='ml-12 text-sm'>
              <ShoppingBagIcon className='h-5 w-5 text-black hover:text-yellow-600 hover:animate-bounce' />
            </a>
          </Link>
        </div>
      </div>
      <div className='mr-2 desktop:hidden block'>
        {menuToggle ? (
          <div className=''>
            <svg
              onClick={() => setMenuToggle(!menuToggle)}
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 cursor-pointer'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              />
            </svg>
            <div className='z-10 mt-5 flex flex-col text-gray-800 bg-green-200 border-2 border-green-100 rounded-md font-bold absolute w-full left-0 h-auto'>
              {menuItem.map((item, index) => (
                <Link href={item.link} key={index}>
                  <span className=' ml-10 mt-1 mb-1 p-2 rounded-lg text-sm text-gray-700 capitalize cursor-pointer ease-in-out duration-200 hover:text-yellow-600 hover:bg-gray-200'>
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <svg
            onClick={() => setMenuToggle(!menuToggle)}
            xmlns='http://www.w3.org/2000/svg'
            className='cursor-pointer h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4 8h16M4 16h16'
            />
          </svg>
        )}
      </div>
    </nav>
  );
}
