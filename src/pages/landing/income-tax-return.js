import Head from 'next/head'
import ArticleWrapper from "../../../components/articlewrapper"
import { useRef } from "react"

export default function IncomeTaxReturn() {
    return (
        <>
            <Head>
                <title>Income Tax Retrun In Khairthal</title>
                <meta name="description" content="" />
            </Head>
            <Hero />
            <Video />
            <ArticleWrapper>
                <Article />
            </ArticleWrapper>
            <section className='py-20 bg-slate-100'>
                <div className='w-full md:w-96 lg:w-115 mx-auto p-5 md:p-10 md:rounded-lg bg-white drop-shadow-xl'>
                    <h2 className='text-2xl font-bold font-josefin_sans text-center mb-6'>Income Tax Return</h2>
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

    const renderer = ({ days, hours, completed }) => {
        if (completed) {
            return "00 00"
        } else {
            return <span> {days} days {hours} hours</span>
        }
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
                                <img className='mb-4' width={150} src="/logo.png" alt="RNC Fintax" />
                            </div>
                            <h1 className="text-2xl font-semibold tracking-tight text-gray-800 sm:text-5xl lg:leading-relaxed capitalize">
                                E-Income Tax Return Filing 2023-24 in Khairthal
                            </h1>
                            <p className='text-gray-500 text-lg font-semibold'>Worried about the complexities of tax filing?</p>
                            <p className='text-gray-500 text-lg font-semibold'>
                                <span>Just share your details and </span>
                                <span className='underline underline-offset-4 decoration-blue-500'>our tax experts will do it for you!</span>
                            </p>
                            <div className="mt-10 flex items-center justify-center">
                                <button ref={handleScroll} className="rounded-md bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600">Book Appintment</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-green-700 to-blue-600 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
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
                    <source src="/vid/intro.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    )
}

function Article() {
    return (
        <>
            <h2>Why Do You Need GST Health Check?</h2>
            <p>The implementation of the Goods and Services Tax (GST) system has brought about significant changes in the way businesses manage their taxes. With its complex rules and regulations, GST compliance can be a challenging task for businesses of all sizes. In order to ensure smooth operations and avoid penalties, it is essential for businesses to conduct regular GST health checks. In this article, we will explore the importance of GST health checks, their benefits, and how they can help businesses maintain compliance.</p>
            <p>Running a successful business involves navigating through a myriad of regulations, and one crucial aspect is tax compliance. GST is a consumption-based tax system that requires businesses to collect and remit taxes to the government. As the GST rules are continuously evolving, it becomes crucial for businesses to periodically assess their compliance status. This is where a GST health check comes into play.</p>
            <h3>What is GST Health Check?</h3>
            <p>A GST health check is a comprehensive review of a business`s GST compliance and processes. It involves a thorough examination of the business`s GST-related activities to identify potential errors, discrepancies, and areas of improvement. The objective is to ensure that the business is adhering to all GST regulations and taking advantage of available benefits while minimizing risks.</p>
            <h3>GST Health Check Report includes:</h3>
            <ul>
                <li>GST returns filing status</li>
                <li>GSTR-1 vs GSTR-3B report</li>
                <li>GSTR-3B vs GSTR-2A report</li>
                <li>Vendor Compliance report</li>
            </ul>
            <h3>Benefits of GST Health Check</h3>
            <ul>
                <li>Ensuring compliance with GST regulations</li>
                <li>Identifying potential errors and discrepancies</li>
                <li>Optimizing GST processes and procedures</li>
                <li>Reducing the risk of penalties and audits</li>
            </ul>
        </>
    )
}

function IncomeTaxReturnFrom() {
    const sheetURL = "https://script.google.com/macros/s/AKfycbyiXN9v-oHl_qFk1uozvj1_T4p6bvEPVUinhXF9yUMWY8gyut5VHX2OBt4pbOCmS2bo/exec"

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
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                <input type="text" name='Name' id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-blue-500" placeholder="Enter Name" required />
            </div>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                <input type="email" name='Email' id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-blue-500" placeholder="name@flowbite.com" required />
            </div>
            <div className="mb-6">
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone</label>
                <input type="tel" name='Phone' id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-blue-500" placeholder='+91 9876543210' required />
            </div>
            <input type="submit" className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center" />
        </form>
    )
}