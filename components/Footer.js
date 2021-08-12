import Link from 'next/link'

function Footer() {
    return (
        <footer className="bg-gray px-8 py-10 border-t border-black">
            <div className="max-w-6xl m-auto flex flex-col-reverse lg:flex-row justify-between items-center text-black font-medium text-lg md:text-x">
                <div className="w-72 lg:w-96 text-center lg:text-left">&copy; Símbolo {new Date().getFullYear()}</div>
                <div className="flex justify-between lg:justify-evenly w-56 lg:w-96 my-8 lg:my-auto">
                    <a href="#" target="_blank">
                        <img src="/assets/facebook.svg" alt="Facebook" className="w-10" />
                    </a>
                    <a href="#" target="_blank">
                        <img src="/assets/linkedin.svg" alt="LinkedIn" className="w-10" />
                    </a>
                    <a href="#" target="_blank">
                        <img src="/assets/youtube.svg" alt="YouTube" className="w-14" />
                    </a>
                </div>
                <div className="flex justify-between lg:justify-evenly w-72 lg:w-96 underline">
                    <Link href="/courses" >
                        <a>COURSES</a>
                    </Link>
                    <Link href="/about" >
                        <a>ABOUT</a>
                    </Link>
                    <Link href="/contact">
                        <a>CONTACT US</a>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer