import Hero from "../../../../components/hero";
import ServicesCards from "../../../../components/servicecards";
import { HiCash } from "react-icons/hi";
import { IoIosBusiness } from "react-icons/io";
import { AiFillRocket } from "react-icons/ai";
import { GiUsaFlag, GiIndiaGate } from "react-icons/gi";
import { RiProfileLine, RiBuildingLine } from "react-icons/ri";
import { FaSignature, FaUserTie } from "react-icons/fa";
import { TbNotebook, TbHeartHandshake } from "react-icons/tb";
import {
  MdBusiness,
  MdFoodBank,
  MdHandshake,
  MdImportExport,
  MdEventAvailable,
} from "react-icons/md";

const post_info = {
  heading: "Startups",
  subheading: "",
};

const service = [
  {
    title: "Partnership",
    href: "/partnership",
    icon: MdHandshake,
    text: "If you are considering starting a partnership business in India, it is crucial to understand the legal requirements and procedures involved in registering your partnership. In this guide, we will walk you through the step-by-step process of partnership registration"
  },
  {
    title: "Proprietorship",
    href: "/proprietorship",
    icon: TbHeartHandshake,
    text: "As a leading authority on business formation and legal compliance, we understand the importance of providing you with accurate and detailed information to help you establish your proprietorship successfully",
  },
  {
    title: "One Person Company",
    href: "/one-person-company",
    icon: FaUserTie,
    text: "One Person Company (OPC), a business structure that offers the benefits of limited liability and sole proprietorship.",
  },
  {
    title: "Limited Liability Partnership",
    href: "/limited-liability-partnership",
    icon: HiCash,
    text: "LLP registration, a crucial step towards streamlining your business structure for success. In this article, we will delve into the intricacies of Limited Liability Partnership (LLP) registration",
  },
  {
    title: "Private Limited Company",
    href: "/private-limited-company",
    icon: RiBuildingLine,
    text: "company registration, a crucial step towards establishing your business presence and achieving your entrepreneurial goals",
  },
  {
    title: "Startup India Registration",
    href: "/startup-india-registration",
    icon: AiFillRocket,
    text: "Start-up India, where we explore the vast opportunities and potential that this innovative initiative offers to aspiring entrepreneurs.",
  },
  {
    title: "Indian Subsidiary",
    href: "/indian-subsidiary",
    icon: IoIosBusiness,
    text: "An Indian subsidiary, designed specifically for international businesses looking to expand their operations into the Indian market.",
  },
  {
    title: "Nidhi Company",
    href: "/nidhi-company",
    icon: GiIndiaGate,
    text: "Nidhi Companies have emerged as a unique concept that combines the aspects of a mutual benefit society and a non-banking financial company (NBFC)",
  },
  {
    title: "Section 8 Company",
    href: "/section8-company",
    icon: MdBusiness,
    text: "Section 8 Company Registration in India. In this article, we will delve into the intricacies of establishing a non-profit organization under Section 8 of the Companies Act, 2013",
  },
  {
    title: "USA Company Registration",
    href: "/usa-company-registration",
    icon: GiUsaFlag,
    text: "We understand the significance of establishing a strong presence in the global market. One of the most effective ways to achieve this is by incorporating a company in the United States",
  },
  {
    title: "Digital Signature",
    href: "/digital-signature",
    icon: FaSignature,
    text: "Where online transactions and communications have become the norm, ensuring security and trust is of paramount importance",
  },
  {
    title: "Udyam Registration",
    href: "/udyam-registration",
    icon: TbNotebook,
    text: "We understand the significance of obtaining Udyam Registration in India. As a business owner, you recognize the value of this registration, which grants you the coveted status of a micro, small, or medium enterprise (MSME).",
  },
  {
    title: "Import Export Code",
    href: "/import-export-code",
    icon: MdImportExport,
    text: "Import Export Code (IEC), a crucial requirement for conducting international trade. Whether you're an individual or a business entity looking to engage in import or export activities, obtaining an IEC is essential.",
  },
  {
    title: "FSSAI Registration",
    href: "/fssai-registration",
    icon: MdFoodBank,
    text: "We understand the importance of complying with food safety regulations to ensure the well-being of consumers and the success of businesses in the food industry.",
  },
  {
    title: "Professional Tax",
    href: "/professional-tax",
    icon: RiProfileLine,
    text: "Professional tax registration in India. As a business owner, it is crucial to ensure that you meet all the legal requirements imposed by the government. Professional tax registration is one such requirement that you should be familiar with in order to streamline your business operations effectively.",
  },
  {
    title: "Check Company or LLP Name Availability",
    href: "/check-company-or-llp-name-availability",
    icon: MdEventAvailable,
    text: "Choosing the right name for your company is crucial. It not only represents your brand but also plays a significant role in attracting customers and establishing a strong online presence",
  },
];

export default function StartUp() {
  return (
    <>
      <Hero data={post_info} />
      <section className="bg-gray-100">
        <div className="py-10 px-10 md:px-24 lg:px-0 max-w-5xl mx-auto md:grid-cols-2 lg:grid-cols-3 grid gap-5">
          <ServicesCards data={service} folder="/services/startups" />
        </div>
      </section>
    </>
  );
}
