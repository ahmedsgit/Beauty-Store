import { SearchIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/solid';
import Link from 'next/link';

export default function Navigation() {
    return (
        <nav className="container mx-auto flex items-center justify-between py-16 ">
            <div className="capitalize text-black-400 text-xl">
                <h1>beauty store</h1>
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
                        <a className="ml-12 text-sm ">
                            <SearchIcon className="h-5 w-5 text-black hover:text-yellow-600 hover:animate-bounce" />
                        </a>
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
