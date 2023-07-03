import Head from "next/head"
import Link from "next/link"
import { useContext } from "react"
import { GrDocumentText, GrFormCheckmark } from "react-icons/gr"
import { Context } from "../../script/context"

export default function Payment() {
    const { paymentDetail } = useContext(Context)
    const [data, heading] = paymentDetail

    return (
        <>
            <Head>
                <title>Payment {heading || ""}</title>
                <meta name="robots" content="noindex" />
                <meta name="googlebot" content="noindex" />
            </Head>
            <section className="max-w-screen-lg mx-5 sm:mx-auto my-10">
                {data && heading ? <PaymentCard data={data} heading={heading} /> : <NoPayment />}
            </section>
        </>
    )
}

function PaymentCard({ data, heading }) {
    // find offer base on percentage given
    const offer = data.price - Math.floor(data.price * (data.percentage / 100))
    return (
        <>
            <div className="flex flex-col md:flex-row border p-5 rounded bg-white drop-shadow-sm">
                <div className="flex-1">
                    <h1 className="text-2xl mb-4 font-semibold">{heading} -</h1>
                    <div>
                        <p>
                            <span className="font-medium">Market Price: </span>
                            <span className="line-through font-medium text-gray-500">₹ {data.price}</span>
                        </p>
                        <p>
                            <span className="font-medium">RNCFintax: </span>
                            <span className="text-green-700 font-semibold">
                                ₹ {offer}
                            </span>
                            <span className="ml-5 text-white bg-green-700 p-px px-1">{data.percentage}% Off</span>
                        </p>
                    </div>
                    <div className="my-10 flex flex-col gap-5 lg:px-10">
                        <a href="tel:9256317271"
                            className="block text-center rounded-lg px-3 py-2.5 text-base font-medium leading-7 text-white bg-black hover:bg-blue-500">
                            Book Appointment
                        </a>
                        <a href={`https://api.whatsapp.com/send?phone=+919256317271&text=*${heading}*: _₹${data.price}_`}
                            className="block text-center rounded-lg px-3 py-2.5 text-base font-medium leading-7 text-white bg-green-500 hover:bg-green-600">
                            WhatsApp
                        </a>
                    </div>
                </div>
                <div className="flex-1">
                    <h2 className="flex gap-2 items-center text-lg font-medium">
                        <GrDocumentText />
                        <span className="font-semibold">Document Required</span>
                    </h2>
                    <ul className="mt-3">
                        {data.list.length <= 1 ?
                            <p>
                                {data.list[0]}
                            </p>
                            :
                            <ul className="text-sm">
                                {data.list.map((item, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <GrFormCheckmark className="text-blue-500 block" fontSize={12} />
                                        <span className="text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

function NoPayment() {
    return (
        <>
            <div className="text-center flex flex-col items-center justify-center h-56">
                <h1 className="text-lg font-semibold">Not a valid serivce</h1>
                <p>Please select a valid service</p>
                <Link href="/services" className="bg-blue-500 text-white rounded p-2 py-1 mt-3 font-mono hover:bg-blue-600">Services</Link>
            </div>
        </>
    )
}