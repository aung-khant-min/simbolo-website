import Head from 'next/head'
import Header from '../../components/Header'
import GetInTouch from '../../components/GetInTouch'
import Footer from '../../components/Footer'
import CourseOutline from '../../components/CourseOutline'
import client from '../../client'

export async function getStaticPaths() {

    const courses = await client.fetch(`*[_type == "course"] {slug}`)

    const paths = courses
        .map(value => ({
            params: { slug: value.slug }
        }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const { slug = "" } = params

    const course = await client.fetch(`
    *[_type == "course" && slug == $slug][0] {instructor{"instructorImage":instructorImage.asset -> url, ...}, ...}`, { slug })

    return { props: { course } }
}

export default function Course({ course }) {

    const { title, form, outline, detail, instructor, feeAndDuration, time } = course

    return (
        <div className="flex flex-col justify-between min-h-screen bg-gray">
            <Head>
                <title>Símbolo - {title}</title>
                <meta property="og:image" content="/social-share.png" />
            </Head>
            <div>
                {/* Header Navigation Section */}
                <Header />

                {/* Course Title*/}
                <div className="bg-gray py-14 px-8">
                    <h1 className="mb-10 text-center font-black text-black text-3xl lg:text-4xl xl:text-5xl tracking-wide">
                        {title}
                    </h1>
                    <a href={form} target="_blank" className="bg-black text-white py-5 px-10 font-bold text-lg md:text-xl tracking-wide
              block w-max rounded-md shadow-2xl m-auto">
                        Register Now
                    </a>
                </div>

                <div className="bg-white py-10 px-8">
                    {/* Course Outline */}
                    <h3 className=" mt-6 mb-14 text-center font-black text-black text-2xl md:text-3xl  tracking-wide">
                        Course Outline
                    </h3>
                    <div className="max-w-6xl m-auto space-y-10">
                        {
                            outline.map((value, index) =>
                                <CourseOutline name={value.itemTitle} items={value.subItems} open={!index && true} />
                            )
                        }
                    </div>
                    {/* Course Details */}
                    <h3 className="mt-16 mb-5 text-center font-black text-black text-2xl md:text-3xl  tracking-wide">
                        Course Details
                    </h3>
                    <div className="max-w-6xl m-auto">
                        <p className="m-auto w-full md:w-2/3 text-center font-medium text-black text-lg md:text-xl  tracking-wide">
                            {detail}
                        </p>
                    </div>
                    {/* Instructor */}
                    <img src={instructor.instructorImage} alt="instructor" className="block m-auto mt-16 w-40 h-40 rounded-full" />
                    <div className="max-w-6xl m-auto">
                        <h3 className="font-black mt-10 mb-5 text-black text-lg md:text-xl text-center tracking-wide">
                            Instrustor: {instructor.instructorName}
                        </h3>
                        <p className="m-auto w-full md:w-2/3 text-center font-medium text-black text-lg md:text-xl  tracking-wide">
                            {instructor.instructorAbout}
                        </p>
                    </div>
                    {/* More Info */}
                    <div className="m-auto w-full md:w-2/3 mt-10 bg-gray text-center py-10 px-5 space-y-5 rounded-2xl
                    font-black text-black text-lg md:text-xl tracking-wide">
                        <h3>{feeAndDuration}</h3>
                        <h3>{time}</h3>
                        <h3>Next Batch will be opened soon. Please fill <a href={form} target="_blank" style={{ color: "blue", textDecoration: "underline" }}>this form</a> to register.</h3>
                    </div>
                </div>
            </div>

            <div>
                {/* Get In Touch Section */}
                <GetInTouch />

                {/* Footer Section */}
                <Footer />
            </div>
        </div>
    )
}