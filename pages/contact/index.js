import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import contacts from '../../data/contacts'

export default function About() {

    const { email, phone } = contacts

    return (
        <div className="flex flex-col justify-between min-h-screen bg-white">
            <Head>
                <title>Símbolo - Contact</title>
                <meta name="description" content="Símbolo - AI & IT school in Myanmar" />
                <meta property="og:image" content="/social-share.png" />
            </Head>
            <div>
                {/* Header Navigation Section */}
                <Header />

                {/* Contact Section */}
                <div className="bg-white px-8">
                    <div className="max-w-6xl m-auto flex flex-col items-center justify-end
         md:flex-row md:justify-between py-14">
                        <div className=" text-center md:text-left md:w-1/2 ">
                            <h2 className="mb-7 text-center font-black text-black text-3xl lg:text-4xl xl:text-5xl tracking-wide max-w-xl m-auto">
                                We'd love to hear <br /> from you
                            </h2>
                            <p className="mb-5 text-center font-medium text-black text-lg md:text-xl tracking-wide max-w-xl m-auto">
                                Drop an email at <a href={`mailto:${email}`} style={{ color: "blue" }}>{email}</a> or
                            </p>
                            <p className="text-center font-medium text-black text-lg md:text-xl tracking-wide max-w-xl m-auto">
                                Call <a href={`tel:${phone}`} style={{ color: "blue" }}>{phone}</a>
                            </p>
                        </div>
                        <img src="/assets/contact.svg" alt="contact" className="w-4/5 my-12 max-w-xs md:max-w-none md:w-2/5 md:my-0" />
                    </div>
                </div>
            </div>

            <div>
                {/* Footer Section */}
                <Footer />
            </div>
        </div>
    )
}