import Link from 'next/link'
import MobileNav from './MobileNav'

function Header() {

    return (
        <header className="border-b border-black px-8 py-4 md:py-6 sticky top-0 bg-white bg-opacity-90">
            <div className="max-w-6xl m-auto  flex items-center justify-between">
                <div>
                    <Link href="/" >
                        <a>
                            <img src="/assets/logo.svg" alt="Símbolo" className="w-24 md:w-36" />
                        </a>
                    </Link>
                </div>
                <div className="flex items-center justify-end">
                    <nav className="hidden md:flex justify-between items-center text-lg font-medium text-black">
                        <Link href="/courses" >
                            <a >COURSES</a>
                        </Link>
                        <Link href="/about" >
                            <a className="ml-16">ABOUT</a>
                        </Link>
                        <Link href="/contact">
                            <a className="ml-16">CONTACT US</a>
                        </Link>
                    </nav>
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}

export default Header