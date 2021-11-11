import { ChevronDoubleUpIcon, SearchIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useState ,useEffect,useRef} from 'react';


export default function Navigation() {
    const [searchBarVisibility, setSearchBar] = useState('hidden');
    const [searchIcon, setIconDesign] = useState('visible');
    const ref = useRef(null)
    const handleSearch = (e)=>{
        e.preventDefault();
        if (searchBarVisibility==='hidden'){
            setSearchBar('visible');
            setIconDesign('hidden');
        }else{
            setSearchBar('hidden');
            setIconDesign('visible');
        }
        // console.log(ref.current.hidden);
    }
    return (
        <nav className="container mx-auto flex items-center justify-between py-16 ">
            <div className="capitalize text-black-400 text-xl">
                <Link href="/">
                    <h1 className="cursor-pointer hover:scale-110 transition delay-150 duration-300 ease-in-out">beauty store</h1>
                </Link>
            </div>            
            <div className="flex items-center">
                <div>
                    <Link href="/">
                        <a className="ml-10 text-sm hover:text-yellow-600">Home</a>
                    </Link>
                    <Link href="/catelogue">
                        <a className="ml-10 text-sm hover:text-yellow-600 ">Catelogue</a>
                    </Link>
                    <Link href="/">
                        <a className="ml-10 text-sm hover:text-yellow-600">Payment</a>
                    </Link>
                    <Link href="/">
                        <a className="ml-10 text-sm hover:text-yellow-600">Shipping</a>
                    </Link>
                    <Link href="/">
                        <a className="ml-10 text-sm hover:text-yellow-600">Blog</a>
                    </Link>
                    <Link href="/">
                        <a className="ml-10 text-sm hover:text-yellow-600">Wishlist</a>
                    </Link>
                    <Link href="/">
                        <a className="ml-10 text-sm hover:text-yellow-600">Contact</a>
                    </Link>
                </div>
                <div className="flex items-center ml-64 ">
                    <Link href="/">
                        <a className="ml-12 text-sm ">
                            <UserIcon className="h-5 w-5 text-black hover:text-yellow-600 hover:animate-bounce" />
                        </a>
                    </Link>
                    <Link href="/">
                        <div className="flex rounded-l-3xl group">
                            <a className="ml-12 text-sm">
                                <SearchIcon onClick={ handleSearch } onOut className={ `${searchIcon} h-10 w-10 p-2 text-black hover:text-yellow-600 hover:animate-bounce`}/>
                            </a>
                            <input ref={ref} id="searchfield" type="search" placeholder="Search..." autoFocus="autofocus" className={ `${searchBarVisibility} w-40 text-grey-800 transition focus:visible focus:border-2 outline-white rounded-xl p-1 appearance-none leading-normal ease-in-out`} />
                        </div>
                        
                    </Link>
                    <Link href="/">
                        <a className="ml-12 text-sm">
                            <ShoppingBagIcon className="h-5 w-5 text-black hover:text-yellow-600 hover:animate-bounce" />
                        </a>
                    </Link>
                </div>
            </div>            
        </nav>
    )
}
