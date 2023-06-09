import Head from "next/head"
import { DM_Serif_Display } from "next/font/google"

const dm_serif_display = DM_Serif_Display({ subsets: ["latin"], weight: ['400'] })

export default function About() {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <AboutHero />
            <Article />
        </>
    )
}

function AboutHero() {
    return (
        <section>
            <div className="aboutHero bg-no-repeat bg-center bg-cover">
                <div className="flex flex-col items-center justify-center mx-auto lg:min-h-160 min-h-80 bg-slate-950/50 rounded-xl">
                    <h1 className={`text-3xl lg:text-5xl text-center text-white lg:leading-tight px-5 lg:px-0 ${dm_serif_display.className}`}>We're Changing the whole game.</h1>
                </div>
            </div>
        </section>
    )
}

function Article() {
    return (
        <section className="articleWrapper max-w-4xl mx-auto article my-16">
            <p>
                Welcome to RNC Fintax, your trusted provider of curated and quality
                services at an affordable price. We are dedicated to assisting individuals and
                businesses with various essential services, including startup registration,
                income tax filing, trademark and copyright registration, import-export code
                application, and GST registration.
            </p>
            <p>
                At RNC Fintax, we understand the challenges and complexities that
                individuals and businesses face when dealing with legal and administrative
                procedures. Our mission is to simplify these processes, saving you time,
                effort, and unnecessary stress. We believe that everyone should have access to
                professional services without breaking the bank, and that's why we strive to
                provide affordable solutions without compromising on quality.
            </p>
            <p>
                Our team consists of experienced professionals who are well-versed in their
                respective fields. They possess the knowledge and expertise necessary to guide
                you through the entire process smoothly, ensuring compliance with the relevant
                legal and regulatory requirements. Whether you're a budding entrepreneur
                looking to register your startup, a business owner in need of tax filing
                services, or an artist seeking copyright protection for your creative work,
                we've got you covered.
            </p>
            <p>
                We take pride in offering a comprehensive range of services that cater to
                diverse needs. Our startup registration services help you navigate the
                intricacies of company formation, ensuring that you meet all legal obligations
                and set a solid foundation for your business. With our income tax filing
                services, we assist individuals and businesses in preparing and filing their
                tax returns accurately and on time, while maximizing potential deductions and
                credits.
            </p>
            <p>
                Protecting your intellectual property is crucial in today's competitive
                market. Our trademark and copyright registration services safeguard your brand
                and creative works, ensuring that they remain exclusive to you. We also
                provide assistance with import-export code application, enabling smooth
                international trade operations. Moreover, our GST registration services help
                you comply with the Goods and Services Tax regulations, streamlining your tax
                processes and promoting seamless business operations.
            </p>
            <p>
                At RNC Fintax, we prioritize customer satisfaction and strive to
                exceed your expectations. We are committed to delivering prompt and reliable
                services, personalized to your specific requirements. Our user-friendly
                approach ensures that you receive the support you need, from initial
                consultation to the successful completion of your desired service.
            </p>
            <p>
                We value your trust and confidentiality. Rest assured that your information is
                handled with the utmost care and privacy throughout our engagement. Your
                success is our success, and we are dedicated to helping you achieve your
                goals.
            </p>
            <p>
                Thank you for considering RNC Fintax as your service provider. We
                look forward to serving you and being a part of your journey towards growth
                and success.
            </p>
            <p>
                If you have any questions or would like to learn more about our services,
                please don't hesitate to contact us. Our friendly team is ready to assist you.
            </p>
        </section>
    )
}