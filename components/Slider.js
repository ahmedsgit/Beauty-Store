import { ArrowRightIcon } from '@heroicons/react/solid';
import SliderLib from "react-slick";
import Image from 'next/image';
import cosmaticBottleImg from '../public/images/cosmetic-bottle.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Slider() {
    const settings = {
        arrows:false,
        dots:true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        cssEase: "linear",
    }
    return (
        <header className="container mx-auto">
            <SliderLib { ...settings }>
                    <div className="slide">
                        <div className="flex relative">
                            <div className="bg-blue-200 w-2/3 flex items-center">
                                <Image
                                    src={ cosmaticBottleImg }
                                    alt='cosmatic Bottle Image'
                                    objectFit
                                />
                                <div className="absolute" style={ { left: '41%' } }>
                                    <h4 className="text-3xl text-gray-700">New</h4>
                                    <h1 className="text-6xl font-medium leading-tight mb-4 tracking-wide">Shower Gel</h1>
                                    <p className="w-144 text-gray-300 leading-snug tracking-wider" style={ { wordSpacing: '3px' } }>Get the ultra clean and revitalized feeling with NIVEA Men Active Clean Shower Gel. This innovative 3-in-1 shower gel is meant for your body, face and hair.Its active charcoal extracts deeply cleanse your skin while the caring formula lathers into a rich foam which keeps your skin hydrated. Get an active start to your day with this refreshing shower gel.</p>
                                </div>
                            </div>
                            <div className="bg-green-200 w-1/3 flex flex-col justify-end">
                                <button className="flex items-center bg-orange-200 p-12 justify-between hover:bg-orange-400 transition delay-150 duration-300 ease-in-out">
                                    <span className="text-gray-100">See All</span>
                                    <ArrowRightIcon className=" h-5 w-5 text-gray-100 hover:text-yellow-600 hover:animate-bounce" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="flex relative">
                            <div className="bg-blue-200 w-2/3 flex items-center">
                                <Image
                                    src={ cosmaticBottleImg }
                                    alt='cosmatic Bottle Image'
                                    objectFit
                                />
                                <div className="absolute" style={ { left: '41%' } }>
                                    <h4 className="text-3xl text-gray-700">New</h4>
                                    <h1 className="text-6xl font-medium leading-tight mb-4 tracking-wide">Shower Gel</h1>
                                    <p className="w-144 text-gray-300 leading-snug tracking-wider" style={ { wordSpacing: '3px' } }>Get the ultra clean and revitalized feeling with NIVEA Men Active Clean Shower Gel. This innovative 3-in-1 shower gel is meant for your body, face and hair.Its active charcoal extracts deeply cleanse your skin while the caring formula lathers into a rich foam which keeps your skin hydrated. Get an active start to your day with this refreshing shower gel.</p>
                                </div>
                            </div>
                            <div className="bg-green-200 w-1/3 flex flex-col justify-end">
                                <button className="flex items-center bg-orange-200 p-12 justify-between hover:bg-orange-400 transition delay-150 duration-300 ease-in-out">
                                    <span className="text-gray-100">See All</span>
                                    <ArrowRightIcon className="h-5 w-5 text-gray-100 hover:text-yellow-600 hover:animate-bounce" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="flex relative">
                            <div className="bg-blue-200 w-2/3 flex items-center">
                                <Image
                                    src={ cosmaticBottleImg }
                                    alt='cosmatic Bottle Image'
                                    objectFit
                                />
                                <div className="absolute" style={ { left: '41%' } }>
                                    <h4 className="text-3xl text-gray-700">New</h4>
                                    <h1 className="text-6xl font-medium leading-tight mb-4 tracking-wide">Shower Gel</h1>
                                    <p className="w-144 text-gray-300 leading-snug tracking-wider" style={ { wordSpacing: '3px' } }>Get the ultra clean and revitalized feeling with NIVEA Men Active Clean Shower Gel. This innovative 3-in-1 shower gel is meant for your body, face and hair.Its active charcoal extracts deeply cleanse your skin while the caring formula lathers into a rich foam which keeps your skin hydrated. Get an active start to your day with this refreshing shower gel.</p>
                                </div>
                            </div>
                            <div className="bg-green-200 w-1/3 flex flex-col justify-end">
                                <button className="flex items-center bg-orange-200 p-12 justify-between hover:bg-orange-400 transition delay-150 duration-300 ease-in-out">
                                    <span className="text-gray-100">See All</span>
                                    <ArrowRightIcon className="h-5 w-5 text-gray-100 hover:text-yellow-600 hover:animate-bounce" />
                                </button>
                            </div>
                        </div>
                    </div>
            </SliderLib>
        </header>
    )
}
