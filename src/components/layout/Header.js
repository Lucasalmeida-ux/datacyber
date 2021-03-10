import Link from 'next/link'
import { useState } from 'react';
import { FaBars } from 'react-icons/fa'

export default function Header() {
    const [toogleMenu, setToogleMenu] = useState(false);
    function openMenu(e) {
        e.preventDefault();
        setToogleMenu(!toogleMenu);
    }
    return (
        <header className="justify-between bg-white p-2 shadow-md">
            <div className="inline-block p-1 md:p-2">
                <a className="pr-3 md:hidden ">
                    <FaBars onClick={openMenu} className="text-gray-300 text-lg inline-block" />
                </a>
                <Link href="/"><a><img src="/logo.png" className="w-25 h-7 md:w-25 md:h-8 inline-block" alt="BETBOL logo" /></a></Link>

            </div>
            
                <nav className={`${toogleMenu ? 'block' : 'hidden'} bg-white md:bg-transparent divide-y-2 md:divide-none z-10 fixed md:static top-10 left-0 md:inline-block md:p-3 float-right`}>
                    
                        <Link href="/solutions/comercio">
                            <a className="block sm:inline transition-colors text-gray-400 hover:text-blue-400 mr-5 md:mr-1 md:mr-5 uppercase text-sm md:text-xs lg:text-sm md:font-bold px-4 md:px-1 lg:px-4">Soluções para Comércios</a>
                        </Link>
                    
                    
                        <Link href="/solutions/distribuidor">
                            <a className="block sm:inline ransition-colors text-gray-400 hover:text-blue-400 mr-5 md:mr-1 md:mr-5 uppercase text-sm md:text-xs lg:text-sm md:font-bold px-4 md:px-1 lg:px-4">Soluções para Istribuidoras e Indústrias</a>
                        </Link>
                    
                    
                        
                            <a href="http://eepurl.com/hplomL" target="_BLANK" className="transition-colors text-gray-400 hover:text-white uppercase mr-5 md:py-2 px-4 md:font-semibold rounded-md md:bg-gray-100 hover:bg-blue-400">Orçamento</a>
                        
                    
                </nav>
            
        </header>
    )
}