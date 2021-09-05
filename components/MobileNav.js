import { useState } from 'react'
import Link from 'next/link'

const MobileNav = () => {
    const [navShow, setNavShow] = useState(false)

    const onToggleNav = () => {
        setNavShow((status) => {
            return !status
        })
    }

    return (
        <div className="lg:hidden">
            <button
                type="button"
                className="w-9 h-9 ml-1 mr-1 focus:outline-none"
                aria-label="Toggle Menu"
                onClick={onToggleNav}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-black"
                >
                    {navShow ? (
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    ) : (
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        />
                    )}
                </svg>
            </button>
            <div
                className={`fixed w-full h-full top-16 right-0 border-t border-black bg-gray z-50 transform 
                ease-in-out duration-300 ${navShow ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <nav className="flex flex-col text-lg text-black">
                    <Link href="/" >
                        <a className="p-5 text-center border-b border-black">HOME</a>
                    </Link>
                    <Link href="/courses" >
                        <a className="p-5 text-center border-b border-black">COURSES</a>
                    </Link>
                    <Link href="/about" >
                        <a className="p-5 text-center border-b border-black ">ABOUT</a>
                    </Link>
                    <Link href="/contact">
                        <a className="p-5 text-center border-b border-black ">CONTACT US</a>
                    </Link>
                </nav>
            </div>
        </div>
    )
}

export default MobileNav