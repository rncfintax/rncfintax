import Hero from "../../../../components/hero";
import ServicesCards from "../../../../components/servicecards";
import { FaBuilding } from "react-icons/fa";
import { BiParty } from "react-icons/bi";
import { MdOutlineChangeHistory } from "react-icons/md";
import { RiMoneyDollarCircleFill, RiShareLine } from "react-icons/ri";
import { IoPersonAdd, IoPersonRemove } from "react-icons/io5";
import { TbHeartHandshake, TbNotes } from "react-icons/tb";
import { MdHandshake, MdPayments } from "react-icons/md";
import { BsFillBalloonFill, BsFillBalloonHeartFill } from "react-icons/bs";
import {
    HiFire,
    HiOutlineReceiptRefund,
    HiReceiptRefund,
} from "react-icons/hi";

const post_info = {
    heading: "MCS Services",
    subheading: "",
};

const service = [
    {
        title: "Proprietorship",
        href: "/proprietorship",
        icon: TbHeartHandshake,
        text: "Setting up a proprietorship in India. As a leading authority on business formation and legal compliance, we understand the importance of providing you with accurate and detailed information to help you establish your proprietorship successfully.",
    },
    {
        title: "Partnership",
        href: "/partnership",
        icon: MdHandshake,
        text: "If you are considering starting a partnership business in India, it is crucial to understand the legal requirements and procedures involved in registering your partnership."
    },
    {
        title: "Company",
        href: "/company",
        icon: FaBuilding,
        text: "As a business owner, it is crucial to understand the importance of fulfilling your company's annual filing requirements."
    },
    {
        title: "LLP Compliance",
        href: "/llp-compliance",
        icon: HiFire,
        text: "We understand the importance of seamless business operations and staying compliant with legal requirements."
    },
    {
        title: "Payroll",
        href: "/payroll",
        icon: MdPayments,
        text: "We understand the critical importance of efficient and accurate payroll management for businesses of all sizes. "
    },
    {
        title: "PF Registration",
        href: "/pf-registration",
        icon: TbNotes,
        text: "If you're a business owner or an HR professional, it's essential to understand the intricacies of registering for the Employees' Provident Fund (EPF) to ensure compliance with the law and provide your employees with valuable social security benefits",
    },
    {
        title: "PF Return Filing",
        href: "/pf-return-filing",
        icon: HiOutlineReceiptRefund,
        text: "This comprehensive guide aims to provide you with a deep understanding of the process, its legal requirements, and the benefits it offers.",
    },
    {
        title: "ESI Registration",
        href: "/esi-registration",
        icon: BiParty,
        text: "ESI registration – a crucial step for businesses looking to provide valuable social security benefits to their employees in India.",
    },
    {
        title: "Add Directors",
        href: "/add-directors",
        icon: IoPersonAdd,
        text: "The appointment of a director plays a pivotal role in shaping the future and success of your organization.",
    },
    {
        title: "Remove Directors",
        href: "/remove-directors",
        icon: IoPersonRemove,
        text: "In this article, we will delve into the intricacies of the director resignation process, providing you with the necessary information and insights to smoothly navigate this transition",
    },
    {
        title: "Share Transfer",
        href: "/share-transfer",
        icon: RiShareLine,
        text: "We understand the complexities and challenges associated with company share transfers",
    },
    {
        title: "DIR-3 KYC",
        href: "/dir-3-kyc",
        icon: HiReceiptRefund,
        text: "We understand the importance of complying with regulatory requirements and maintaining accurate records for directors in India."
    },
    {
        title: "Registered Office Change",
        href: "/registered-office-change",
        icon: MdOutlineChangeHistory,
        text: "Establishing a strong business presence in India through a registered office.",
    },
    {
        title: "Increase Authorized Capital",
        href: "/increase-authorized-capital",
        icon: RiMoneyDollarCircleFill,
        text: "As a trusted source for all your business-related queries, we aim to provide you with valuable insights into the concept of authorized capital and its significance.",
    },
    {
        title: "Winding Up of Company",
        href: "/winding-up-of-company",
        icon: BsFillBalloonFill,
        text: "We understand the complexities and challenges involved in the winding up of a company. Whether it's due to financial difficulties, a change in business direction",
    },
    {
        title: "Winding Up of LLP",
        href: "/winding-up-of-llp",
        icon: BsFillBalloonHeartFill,
        text: "Limited Liability Partnership (LLP) winding up. In this article, we will provide you with detailed insights and step-by-step procedures to successfully wind up an LLP.",
    },
];

export default function MCSServices() {
    return (
        <>
            <Hero data={post_info} />
            <section className="bg-gray-100">
                <div className="py-10 px-10 md:px-24 lg:px-0 max-w-5xl mx-auto md:grid-cols-2 lg:grid-cols-3 grid gap-5">
                    <ServicesCards data={service} folder="/services/mcs-services" />
                </div>
            </section>
        </>
    );
}
