import Head from 'next/head'
import Image from 'next/image'
import { useRef } from "react"
import { BsTelephoneFill } from "react-icons/bs"
import ArticleWrapper from "../../../components/articlewrapper"
import { Josefin_Sans } from "next/font/google"

const josefinsans = Josefin_Sans({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700'] })

export default function IncomeTaxReturn() {
    return (
        <>
            <Head>
                <title>Income Tax Retrun In Khairthal</title>
                <meta name="description" content="E-Income Tax Return Filing in Khairthal, Contact us for online ITR filing." />
                <meta property="og:title" content="E-Income Tax Retrun In Khairthal" />
                <meta property="og:description" content="E-Income Tax Return Filing in Khairthal, Contact us for online ITR filing." />
                <meta property="og:image" content="https://rncfintax.com/img/thumb4.webp" />
                <meta property="og:url" content="https://rncfintax.com/landing/income-tax-return" />
            </Head>
            <Hero />
            <Video />
            <ArticleWrapper>
                <Article />
            </ArticleWrapper>
            <section className='py-20 bg-slate-100'>
                <div className='w-full md:w-96 lg:w-115 mx-auto p-5 md:p-10 md:rounded-lg bg-white drop-shadow-xl'>
                    <h2 className={`text-2xl font-bold text-center mb-6 ${josefinsans.className}`}>Income Tax Return</h2>
                    <IncomeTaxReturnFrom />
                </div>
            </section>
        </>
    )
}

function Hero() {
    const ref = useRef(null)

    function handleScroll() {
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <div className="bg-white">
                <div className="relative isolate px-6 pt-6 lg:px-8">
                    <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-green-500 to-orange-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
                    </div>
                    <div className="mx-auto max-w-2xl py-16 sm:py-20">
                        <div className="text-center">
                            <div className='flex items-center justify-center'>
                                <Image className='mb-4' width={150} height={50} src="/logo.png" alt="RNC Fintax" />
                            </div>
                            <h1 className="text-2xl font-semibold tracking-tight text-gray-800 sm:text-5xl lg:leading-relaxed capitalize">
                                E-Income Tax Return Filing 2023-24 in Khairthal
                            </h1>
                            <p className='text-gray-500 text-lg font-semibold'>Worried about the complexities of tax filing?</p>
                            <p className='text-gray-500 text-lg font-semibold'>
                                <span>Just share your details and </span>
                                <span className='underline underline-offset-4 decoration-emerald-500'>our tax experts will do it for you!</span>
                            </p>
                            <div className="mt-10 flex items-center justify-center">
                                <a href='tel:+91 9256317271' ref={handleScroll} className="rounded-md bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600 flex items-center gap-3">
                                    <BsTelephoneFill />
                                    <span>Book Appintment</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-green-700 to-emerald-600 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
                    </div>
                </div>
            </div>
        </>
    )
}

function Video() {
    return (
        <section className="bg-white">
            <div className='max-w-4xl mx-5 md:mx-auto'>
                <video preload='true' className="w-full outline-none border-none" controls>
                    <source src="/vid/itr.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    )
}

function Article() {
    return (
        <>

        </>
    )
}

function IncomeTaxReturnFrom() {
    const sheetURL = "https://script.google.com/macros/s/AKfycbw3VWvVemqovzpzWCw6NbuCY9y7YR2X52-yOyybtwqwuA1D5_3QO9tzl0fh0HjCfE6D/exec"

    function handleForm(e) {
        e.preventDefault()

        const form = document.forms["google-sheet"]

        fetch(sheetURL, { method: "POST", body: new FormData(form) })
            .then(res => {
                form.reset()
                console.log(res)
            })
            .catch((error) => console.error("Error!", error.message))
    }

    return (
        <form onSubmit={handleForm} method="post" autoComplete="off" name="google-sheet">
            <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name<span className='text-red-600'>*</span></label>
                <input type="text" name='Name' id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 outline-emerald-500" placeholder="Enter Name" required />
            </div>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email<span className='text-red-600'>*</span></label>
                <input pattern='^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$' type="email" name='Email' id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 outline-emerald-500" placeholder="name@flowbite.com" required />
            </div>
            <div className="mb-6">
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone<span className='text-red-600'>*</span></label>
                <input pattern='^(0|91)?[6-9][0-9]{9}$' type="tel" name='Phone' id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 outline-emerald-500" placeholder='+91 9256317271' required />
            </div>
            <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Message</label>
                <textarea type="tel" name='Message' id="message" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 outline-emerald-500" placeholder='Message...'></textarea>
            </div>
            <input type="submit" className="text-white bg-emerald-500 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center" />
        </form>
    )
}