import Link from 'next/link'

function Course({ name = "", description = "", slug = "" }) {

    return (
        <div className="bg-white text-center py-14 px-8">
            <h2 className="font-black text-black text-xl md:text-2xl  tracking-wide max-w-2xl m-auto">
                {name}
            </h2>
            <p className="font-medium text-black text-lg md:text-xl tracking-wide max-w-2xl m-auto my-5 md:my-10 ">
                {description}
            </p>
            <Link href={`/courses/${slug}`}>
                <a className="bg-black text-white py-5 px-10 font-bold text-lg md:text-xl tracking-wide
              block w-max rounded-md shadow-2xl m-auto">
                    Learn More
                </a>
            </Link>
        </div>
    )
}

export default Course