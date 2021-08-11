import Head from 'next/head'
import Header from '../components/Header'
import Link from 'next/link'
import Feedback from '../components/Feedback'
import GetInTouch from '../components/GetInTouch'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-gray">
      <Head>
        <title>Símbolo - Home</title>
        <meta name="description" content="Simbolo - AI & IT school in Myanmar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {/* Header Navigation Section */}
        <Header />

        {/* Hero Section */}
        <div className="bg-gray px-8">
          <div className="max-w-6xl m-auto flex flex-col-reverse items-center justify-end
         md:flex-row md:justify-between pb-5"
            style={{ height: "90vh", minHeight: "650px", maxHeight: "700px" }}>
            <div className=" text-center md:text-left md:w-1/2 ">
              <p className=" font-black text-black text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
            flex flex-col mb-7 md:mb-14 tracking-wide ">
                <span>Let's Learn</span>
                <span className="my-2 md:my-8">Artificial Intelligence </span>
                <span>& IT With Símbolo</span>
              </p>
              <Link href="/courses">
                <a className="bg-black text-white py-5 px-10 font-bold text-lg md:text-xl tracking-wide
              block w-max rounded-md shadow-2xl mx-auto md:mx-0">
                  View Courses
                </a>
              </Link>
            </div>
            <img src="/assets/hero-img.svg" alt="Símbolo" className="w-4/5 my-12 max-w-xs md:max-w-none md:w-2/5 md:my-0" />
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white px-8">
          <div className="max-w-6xl m-auto flex flex-col items-center
         md:flex-row md:justify-between"
            style={{ height: "90vh", minHeight: "700px", maxHeight: "700px" }}>
            <img src="/assets/about-img.svg" alt="Símbolo" className="w-4/5 my-12 max-w-xs md:max-w-none md:w-2/5 md:my-0" />
            <div className=" text-center md:text-left md:w-1/2 ">
              <h1 className=" font-black text-black text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-wide ">
                Símbolo AI & IT School
              </h1>
              <p className=" font-medium text-black text-lg md:text-xl tracking-wide 
            my-5 md:my-10">
                A Myanmar(Burma) based AI and IT training school.
                We provide best quality courses. Learn more about us.
              </p>
              <Link href="/about">
                <a className="bg-black text-white py-5 px-10 font-bold text-lg md:text-xl tracking-wide
              block w-max rounded-md shadow-2xl mx-auto md:mx-0">
                  Learn More
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* Method Section */}
        <div className="bg-gray px-8 py-16 md:py-24">
          <div className="max-w-6xl m-auto">
            <h2 className=" text-center font-black text-black text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-wide">
              The Símbolo Method
            </h2>
            <h3 className=" mt-6 mb-14 text-center font-black text-black text-xl md:text-2xl  tracking-wide">
              <span className="text-red">#</span>AIforGood <span className="text-red">#</span>ITforGood
            </h3>
            <div className="flex flex-col items-center md:flex-row md:justify-between">
              <div className="flex flex-col justify-evenly items-center rounded-2xl shadow-xl w-4/5 max-w-xs h-80 mb-10 md:mb-0 md:w-52 md:h-56 lg:w-72 lg:h-80 xl:w-80 xl:h-96 bg-white">
                <img src="/assets/theory.svg" alt="Theory + Practical" className=" w-1/3" />
                <h3 className="font-black text-black text-xl lg:text-2xl">Theory + Practical</h3>
              </div>
              <div className="flex flex-col justify-evenly items-center rounded-2xl shadow-xl w-4/5 max-w-xs h-80 mb-10 md:mb-0 md:w-52 md:h-56 lg:w-72 lg:h-80 xl:w-80 xl:h-96 bg-white">
                <img src="/assets/learn.svg" alt="Learn By Doing" className=" w-1/3" />
                <h3 className="font-black text-black text-xl lg:text-2xl">Learn By Doing</h3>
              </div>
              <div className="flex flex-col justify-evenly items-center rounded-2xl shadow-xl w-4/5 max-w-xs h-80 mb-10 md:mb-0 md:w-52 md:h-56 lg:w-72 lg:h-80 xl:w-80 xl:h-96 bg-white">
                <img src="/assets/support.svg" alt="Get Expert Support" className=" w-1/3" />
                <h3 className="font-black text-black text-xl lg:text-2xl">Get Expert Support</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="bg-white px-8 py-16 md:py-24">
          <div className="max-w-6xl m-auto">
            <h2 className=" mb-10 text-center font-black text-black text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-wide">
              What Students Say:
            </h2>
            <div className="space-y-10">
              <Feedback image="/assets/avatar.svg" name="Kyaw Kyaw" feedback="A Myanmar(Burma) based AI and IT training school.We provide best quality courses. Learn more about us." />
              <Feedback image="/assets/avatar.svg" name="Kyaw Kyaw" feedback="A Myanmar(Burma) based AI and IT training school.We provide best quality courses. Learn more about us." />
              <Feedback image="/assets/avatar.svg" name="Kyaw Kyaw" feedback="A Myanmar(Burma) based AI and IT training school.We provide best quality courses. Learn more about us." />
              <Feedback image="/assets/avatar.svg" name="Kyaw Kyaw" feedback="A Myanmar(Burma) based AI and IT training school.We provide best quality courses. Learn more about us." />
            </div>
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
