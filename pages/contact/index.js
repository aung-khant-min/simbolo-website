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
                <div className="px-8 py-8">
                    <h2 className="my-10 xl:my-20 text-center font-black text-black text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-wide max-w-xl m-auto">
                        We'd love to hear from you
                    </h2>
                    <p className="text-center font-medium text-black text-lg md:text-xl tracking-wide max-w-xl m-auto">
                        Drop an email at <a href={`mailto:${email}`} style={{ color: "blue" }}>{email}</a> or
                        <br /><br />Call <a href={`tel:${phone}`} style={{ color: "blue" }}>{phone}</a>
                    </p>
                </div>
            </div>

            <div>
                {/* Footer Section */}
                <Footer />
            </div>
        </div>
    )
}