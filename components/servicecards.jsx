import Link from "next/link"
import { HiOutlineOfficeBuilding } from "react-icons/hi"
import { MdOutlineBusinessCenter, MdBusiness } from "react-icons/md"
import { TbCoinRupee, TbCertificate, TbReceiptTax } from "react-icons/tb"

const service = [
  {
    title: "Startups",
    icon: TbCertificate,
    href: "startups",
    text: "If you are considering starting a partnership business in India, it is crucial to understand the legal requirements and procedures involved in registering your partnership. In this guide, we will walk you through the step-by-step process of partnership registration."
  },
  {
    title: "Income tax",
    icon: TbCoinRupee,
    href: "income-tax",
    text: "An Income Tax Return is a document that individuals, firms, or Hindu undivided families use to report their income, claim applicable exemptions and deductions, calculate the amount of tax owed on that income, and reflect any taxes already paid."
  },
  {
    title: "Goods & Service Tax",
    icon: TbReceiptTax,
    href: "gst",
    text: "Introduced on July 1, 2017, GST has revolutionized the Indian tax system by subsuming various indirect taxes such as VAT, excise duty, service tax, and more."
  },
  {
    title: "Trademark",
    icon: MdOutlineBusinessCenter,
    href: "trademark",
    text: "In today's competitive market, establishing a strong brand identity is crucial for success. One of the most effective ways to protect your brand is by registering a trademark"
  },
  {
    title: "MCS Services",
    icon: MdBusiness,
    href: "mcs-services",
    text: "MCS services, also known as Managed Communication Services, refer to a comprehensive suite of solutions and support provided by a specialized company or service provider to assist businesses in effectively managing their communication infrastructure. "
  },
  {
    title: "Import Export",
    icon: HiOutlineOfficeBuilding,
    href: "import-export",
    text: "At RNC Fintax, we specialize in providing expert guidance and support to businesses looking to expand their horizons by engaging in international trade."
  }
]

export default function ServicesCards({ data = service, NumOfCard = 99, folder = '' }) {
  return (
    <>
      {data.slice(0, NumOfCard).map((e, i) => (
        <div key={i} className="bg-white border hover:drop-shadow-md">
          <Link href={folder + e.href} className="p-6 block">
            {e.icon ? <e.icon fontSize={32} /> : <span></span>}
            <h3 className="text-2xl font-bold leading-relaxed">{e.title}</h3>
            <p className="text-gray-700">{e.text.slice(0, 125) + "..."}</p>
          </Link>
        </div>
      ))}
    </>
  );
}
