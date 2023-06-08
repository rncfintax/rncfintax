import Head from "next/head";
import ContactForm from "../../components/contactform";
import Hero from "../../components/hero";

const post_info = {
    heading: "Contact",
    subheading: "We are always here to ensure customer satisfaction "
}

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact Us</title>
            </Head>
            <Hero data={post_info} />
            <section className="text-gray-600 body-font">
                <div className="container max-w-5xl px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="md:w-1/2 bg-gray-300 rounded-xl overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3529.322610306689!2d76.63719807534993!3d27.79983897612958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3972a532e81ea0ff%3A0x60bf947c7ca05cbc!2sRam%20Naresh%20%26%20Co.!5e0!3m2!1sen!2sin!4v1681455895293!5m2!1sen!2sin" style={{ filter: "opacity(0.8)" }}></iframe>
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="px-6 lg:mt-0">
                                <h2 className="title-font mt-4 font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1">WARD NO 10, opp. Shiv Temple, Old Anaj Mandi, Khairthal, Rajasthan 301404</p>
                                <h2 className="title-font mt-4 font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                <a className="text-blue-500 leading-relaxed">rncfintax@gmail.com</a>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                <a href="tel:9256317271" className="leading-relaxed">+91 9256317271</a>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 bg-white flex flex-col md:ml-auto w-full py-8 lg:py-0 mt-8 md:mt-0">
                        <h2 className="text-gray-900 text-3xl mb-1 title-font font-dm_serif_display">Contact Us</h2>
                        <p className="leading-relaxed mb-5 text-gray-600"></p>
                        <ContactForm />
                    </div>
                </div>
            </section>
        </>
    )
}