import Head from 'next/head'
import Header from '../../components/Header'
import GetInTouch from '../../components/GetInTouch'
import Footer from '../../components/Footer'
import Course from '../../components/Course'

export default function Courses() {
    return (
        <div className="flex flex-col justify-between min-h-screen bg-gray">
            <Head>
                <title>Símbolo - Courses</title>
                <meta name="description" content="Simbolo - AI & IT school in Myanmar" />
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
                        <Course name="Artificial Intelligence Course" description="A Myanmar(Burma) based AI and IT training school.
              We provide best quality courses. Learn more about us." slug="artificial-intelligence-course" />
                        <Course name="Artificial Intelligence Course" description="A Myanmar(Burma) based AI and IT training school.
              We provide best quality courses. Learn more about us." slug="artificial-intelligence-course" />
                        <Course name="Artificial Intelligence Course" description="A Myanmar(Burma) based AI and IT training school.
              We provide best quality courses. Learn more about us." slug="artificial-intelligence-course" />
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