import { Disclosure } from '@headlessui/react'
import { DM_Serif_Display } from "next/font/google"
import { TbChevronUp } from "react-icons/tb"

const dm_serif_display = DM_Serif_Display({ subsets: ["latin"], weight: ['400'] })

export function FAQWrapper({ children }) {
    return (
        <section className="py-10 bg-gray-100">
            <div>
                <h3 className={`text-3xl ${dm_serif_display.className} text-center mb-10`}>FAQ's</h3>
            </div>
            <div>
                {children}
            </div>
        </section>
    )
}

export default function FAQ({ data }) {
    return (
        <div className="mx-auto w-full px-5 sm:px-2 max-w-3xl bg-white p-2">
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-50 hover:bg-blue-50 px-4 py-2 text-left font-medium text-gary-950">
                            <span>{data.qus}</span>
                            <TbChevronUp fontSize={20} className={`${open ? 'rotate-180 transform' : ''} text-blue-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500">
                            {data.ans}
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    )
}
