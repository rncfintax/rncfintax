import { TbChevronUp, TbChevronDown } from "react-icons/tb"
import { useState } from "react"
import { DM_Serif_Display } from "next/font/google"

const dm_serif_display = DM_Serif_Display({ subsets: ["latin"], weight: ['400'] })

export function FAQWrapper({ children }) {
    return (
        <section className="py-20 bg-gray-100">
            <div>
                <h3 className={`text-3xl ${dm_serif_display.className} text-center mb-10`}>FAQ's</h3>
            </div>
            {children}
        </section>
    )
}

function Icon({ Tag }) {
    return <Tag fontSize={18} />;
}


export default function FAQ({ data }) {
    const [toggleFAQ, setToggleFAQ] = useState('hidden')

    const handleToggleFAQ = () =>
        toggleFAQ === 'hidden' ? setToggleFAQ('block') : setToggleFAQ('hidden')

    return (
        <div className="my-4 select-none">
            <div className="mx-5 max-w-3xl lg:mx-auto bg-white drop-shadow-sm rounded-md border border-gray-100">
                <div onClick={handleToggleFAQ} className="p-4">
                    <h3 className="text-xl flex items-start justify-between font-medium cursor-pointer">
                        <span className="font-semibold">{data.qus}</span>
                        <div className="w-7 h-7 grid place-items-center">
                            <Icon Tag={toggleFAQ === 'hidden' ? TbChevronDown : TbChevronUp} />
                        </div>
                    </h3>
                </div>
                <div className={`${toggleFAQ} p-4`}>
                    <p className="text-lg text-gray-700">{data.ans}</p>
                </div>
            </div>
        </div>
    )
}