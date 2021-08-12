import Head from 'next/head'
import Header from '../../components/Header'
import GetInTouch from '../../components/GetInTouch'
import Footer from '../../components/Footer'
import Member from '../../components/Member'
import client from '../../client'
import contacts from '../../data/contacts'

export async function getStaticProps() {
    const members = await client.fetch(`*[_type == "member"] {"image": image.asset -> url, ...} | order(_createdAt desc)`)
    return { props: { members } }
}

export default function About({ members }) {

    const { memberForm } = contacts

    return (
        <div className="flex flex-col justify-between min-h-screen bg-gray">
            <Head>
                <title>Símbolo - About</title>
                <meta name="description" content="Símbolo - AI & IT school in Myanmar" />
                <meta property="og:image" content="/social-share.png" />
            </Head>
            <div>
                {/* Header Navigation Section */}
                <Header />

                {/* About Section */}
                <div className="bg-white py-14 px-8">
                    <h1 className=" text-center font-black text-black text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-wide max-w-xl m-auto">
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing
                    </h1>
                    <h3 className="mt-10 text-center font-medium text-black text-lg md:text-xl tracking-wide">
                        Want to join us? &nbsp;
                        <a href={memberForm} target="_blank" style={{ color: "blue", textDecoration: "underline" }}>
                            Fill this form
                        </a>
                    </h3>
                </div>

                <div className="bg-gray  py-14 px-8">
                    <div className="max-w-6xl m-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                            <h2 className=" mb-5 font-black text-black text-xl md:text-2xl  tracking-wide">
                                Story Of Símbolo
                            </h2>
                            <p className=" font-medium text-black text-lg md:text-xl tracking-wide">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing piscing elit, sed do eiusmod tempor incididunt ut labore
                            </p>
                        </div>
                        <div>
                            <h2 className="mb-2 font-black text-black text-xl md:text-2xl  tracking-wide">
                                Mission
                            </h2>
                            <p className=" font-medium text-black text-lg md:text-xl tracking-wide">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            </p>
                            <h2 className="mt-10 mb-2 font-black text-black text-xl md:text-2xl  tracking-wide">
                                Vision
                            </h2>
                            <p className=" font-medium text-black text-lg md:text-xl tracking-wide">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            </p>
                            <h2 className="mt-10 mb-2 font-black text-black text-xl md:text-2xl  tracking-wide">
                                Values
                            </h2>
                            <p className=" font-medium text-black text-lg md:text-xl tracking-wide">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-white  py-16 px-8">
                    <h1 className="mb-12 md:mb-20 text-center font-black text-black text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-wide max-w-xl m-auto">
                        Meet Our Team
                    </h1>
                    <div className="max-w-6xl m-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
                        {
                            members.map(member => <Member name={member.name} image={member.image} role={member.role} />)
                        }
                    </div>
                    <h3 className="mt-12 text-center font-medium text-black text-lg md:text-xl tracking-wide">
                        Want to join us? &nbsp;
                        <a href={memberForm} target="_blank" style={{ color: "blue", textDecoration: "underline" }}>
                            Fill this form
                        </a>
                    </h3>
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