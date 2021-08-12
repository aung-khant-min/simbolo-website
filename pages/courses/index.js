import Head from 'next/head'
import Header from '../../components/Header'
import GetInTouch from '../../components/GetInTouch'
import Footer from '../../components/Footer'
import Course from '../../components/Course'
import client from '../../client'

export async function getStaticProps() {
    const courses = await client.fetch(`*[_type == "course"] {title, slug, description} | order(_createdAt desc)`)
    return { props: { courses } }
}

export default function Courses({ courses }) {
    return (
        <div className="flex flex-col justify-between min-h-screen bg-gray">
            <Head>
                <title>Símbolo - Courses</title>
                <meta property="og:image" content="/social-share.png" />
            </Head>
            <div>
                {/* Header Navigation Section */}
                <Header />

                {/* Courses */}
                <div className="bg-gray">
                    <div className=" py-14 px-8">
                        <h1 className=" text-center font-black text-black text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-wide">
                            Símbolo courses
                        </h1>
                        <h3 className="mt-6 text-center font-black text-black text-xl md:text-2xl  tracking-wide">
                            <span className="text-red">#</span>AIforGood <span className="text-red">#</span>ITforGood
                        </h3>
                    </div>
                    <div className="space-y-10">
                        {
                            courses.map(course => <Course key={course.slug} name={course.title} description={course.description} slug={course.slug} />)
                        }
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