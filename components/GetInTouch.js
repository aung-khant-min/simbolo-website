import Link from 'next/link'

function GetInTouch() {

    return (
        <div className="bg-gray px-8 py-16 md:py-24">
            <div className="max-w-6xl m-auto">
                <h2 className="text-center font-black text-black text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-wide">
                    Connect With Símbolo
                </h2>
                <p className="font-medium text-black text-lg md:text-xl tracking-wide my-5 md:my-10 text-center max-w-2xl mx-auto">
                    Make sure you don't miss our knowledge sharing events about
                    AI & IT. And if you want to connect with us:
                </p>
                <Link href="/contact">
                    <a className="bg-black text-white py-5 px-10 font-bold text-lg md:text-xl tracking-wide
              block w-max rounded-md shadow-2xl mx-auto">
                        Get In Touch
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default GetInTouch