import Image from 'next/image';
import cosmaticsCream from '../public/images/cosmetic-cream.png';
import cosmaticsBottle from '../public/images/cosmetics-bottles.png';
import cosmaticsJar from '../public/images/cosmetics-jar.png';
import cosmaticsTwoBot from '../public/images/cosmetics-two-bottles.png';
import cosmaticsYellowJar from '../public/images/cosmetics-yellow-jar.png';
import cosmatics from '../public/images/Cosmetics.png';
import { ArrowUpIcon, ArrowDownIcon, ArrowRightIcon} from '@heroicons/react/solid';


export default function Products() {
    return (
        <div className="w-4/6 flex mt-20">
            <div className="w-1/2 mr-6 ">
                <div className="bg-green-200 mb-6 w-2/3 relative ml-auto" style={{height:'28rem'}}>
                    <div className="absolute -top-20">
                        <Image
                            src={ cosmaticsTwoBot }
                            alt='cosmatic Two Bottle'
                            objectFit
                        />
                    </div>
                    <div className="absolute bottom-0 right-0 p-5 capitalize bg-white hover:bg-orange-300 hover:text-white px-10">
                        <a href="">for body</a>
                        <ArrowUpIcon className="absolute h-5 w-6 left-2 bottom-5 text-white-300 hover:text-orange-400 animate-bounce hover:animate-none" />
                    </div>
                </div>
                <div className="bg-gray-200 mb-6 w-full pt-32 relative" >
                        <Image
                            src={ cosmaticsYellowJar }
                            alt='cosmatic Yellow Jar'
                            objectFit
                        />
                    <div className="absolute top-0 left-0 p-5 capitalize bg-white hover:bg-orange-300 hover:text-white px-10">
                        <a href="">for face</a>
                        <ArrowDownIcon className="absolute rotate-90 h-5 w-6 left-2 bottom-5 text-white-300 hover:text-orange-400 animate-bounce hover:animate-none" />
                    </div>
                </div>
                
                <div className="bg-pink-100 mb-6 w-2/3 ml-auto h-64 relative">
                    <div className="absolute ">
                        <Image
                            src={ cosmaticsCream }
                            alt='cosmatics Cream'
                            objectFit
                        />
                    </div>
                    <div className="absolute top-0 right-0 p-5 capitalize bg-white hover:bg-orange-300 hover:text-white px-8">
                        <a href="">for hair</a>
                        <ArrowDownIcon className="absolute rotate-90 h-5 w-6 left-2 bottom-5 text-white-300 hover:text-orange-400 animate-bounce hover:animate-none" />
                    </div>
                </div>
                
            </div>
            <div className="w-1/2">
                <div className="bg-gray-200 mb-6 w-2/3 relative mt-72" style={ { height: '22rem' } }>
                    <div className="absolute -top-56 ml-16">
                        <Image
                            src={ cosmatics }
                            alt='cosmatics'
                            objectFit
                        />
                    </div>
                    <div className="absolute left-0 bottom-0 p-5 capitalize bg-white hover:bg-orange-300 hover:text-white px-8">
                        <a href="">perfume</a>
                        <ArrowUpIcon className="absolute h-5 w-6 right-1 bottom-5 text-white-300 hover:text-orange-400 animate-bounce hover:animate-none" />
                    </div>
                </div>
                <div className="bg-orange-100 mb-6 w-full p-6 relative h-52">
                    <div className="absolute">
                        <Image
                            src={ cosmaticsBottle }
                            alt='cosmatic Bottle'
                            objectFit
                        />
                    </div>
                    <div className="absolute left-0 bottom-0 p-5 capitalize bg-white hover:bg-orange-300 hover:text-white px-8">
                        <ArrowRightIcon className="absolute h-5 w-6 right-1 bottom-5 text-white-300 hover:text-orange-400 animate-bounce hover:animate-none" />
                        <a href="">pumper</a>
                    </div>
                </div>
                
                <div className="bg-gray-200 mb-6 w-2/3 mt-32 p-10 relative h-40">
                    <div className="absolute mr-5 left-0">
                        <Image
                            src={ cosmaticsJar }
                            alt='cosmatics Jar'
                            objectFit
                        />
                    </div>
                    <div className="absolute left-0 top-0 px-7 py-2 capitalize bg-white hover:bg-orange-300 hover:text-white ">
                        <ArrowDownIcon className="absolute h-5 w-6 right-1 bottom-2 text-white-300 hover:text-orange-400 animate-bounce hover:animate-none" />
                        <a href="">For men</a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
