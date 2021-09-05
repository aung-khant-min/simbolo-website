import Link from 'next/link'

function Course({ name = "", description = "", slug = "", image = "" }) {

    return (
        <div className="bg-white text-center w-11/12 md:w-10/12 max-w-5xl m-auto rounded-2xl shadow-xl">
            <img src={image} alt="course" className="rounded-t-2xl w-full block" />
            <div className="p-10 pb-14">
                <h2 className="font-black text-black text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-wide max-w-2xl m-auto">
                    {name}
                </h2>
                <p className="font-medium text-black text-lg md:text-xl tracking-wide max-w-3xl m-auto my-5 md:my-10 ">
                    {description}
                </p>
                <Link href={`/courses/${slug}`}>
                    <a className="bg-black text-white py-5 px-10 font-bold text-lg md:text-xl tracking-wide
              block w-max rounded-md shadow-2xl m-auto">
                        View Course Details
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Course