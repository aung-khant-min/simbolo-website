import Head from 'next/head'
import Header from '../../components/Header'
import GetInTouch from '../../components/GetInTouch'
import Footer from '../../components/Footer'
import CourseOutline from '../../components/CourseOutline'

const items = ['Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing', 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing', 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing', 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing', 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing']

export default function Course() {
    return (
        <div className="flex flex-col justify-between min-h-screen bg-gray">
            <Head>
                <title>Símbolo - Artificial Intelligence Course</title>
                <meta name="description" content="Simbolo - AI & IT school in Myanmar" />
            </Head>
            <div>
                {/* Header Navigation Section */}
                <Header />

                {/* Course Title*/}
                <div className="bg-gray py-14 px-8">
                    <h1 className="mb-10 text-center font-black text-black text-3xl lg:text-4xl xl:text-5xl tracking-wide">
                        Artificial Intelligence Course
                    </h1>
                    <a href="#" target="_blank" className="bg-black text-white py-5 px-10 font-bold text-lg md:text-xl tracking-wide
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
                        <CourseOutline name="Artificial Intelligence Basics" items={items} open={true} />
                        <CourseOutline name="Machine Learning" items={items} />
                        <CourseOutline name="Deep Learning" items={items} />
                        <CourseOutline name="Natural Language Processing" items={items} />
                    </div>
                    {/* Course Details */}
                    <h3 className="mt-16 mb-5 text-center font-black text-black text-2xl md:text-3xl  tracking-wide">
                        Course Details
                    </h3>
                    <div className="max-w-6xl m-auto">
                        <p className="m-auto w-full md:w-2/3 text-center font-medium text-black text-lg md:text-xl  tracking-wide">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing piscing elit, sed do eiusmod tempor incididunt ut labore
                        </p>
                    </div>
                    {/* Instructor */}
                    <img src="../assets/avatar.svg" alt="instructor" className="block m-auto mt-16 w-40 h-40 rounded-full" />
                    <div className="max-w-6xl m-auto">
                        <h3 className="font-black mt-10 mb-5 text-black text-lg md:text-xl text-center tracking-wide">
                            Instrustor: Phyo Thu Htet
                        </h3>
                        <p className="m-auto w-full md:w-2/3 text-center font-medium text-black text-lg md:text-xl  tracking-wide">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        </p>
                    </div>
                    {/* More Info */}
                    <div className="m-auto w-full md:w-2/3 mt-10 bg-gray text-center py-10 px-5 space-y-5 rounded-2xl
                    font-black text-black text-lg md:text-xl tracking-wide">
                        <h3>Course fee: 30000 MMKs. Estimated Duration: 2 Months</h3>
                        <h3>Time: Every Saturday, Sunday (9am - 10:30am)</h3>
                        <h3>Next Batch will be opened soon. Please fill <a href="#" target="_blank" style={{ color: "blue", textDecoration: "underline" }}>this form</a> to register.</h3>
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