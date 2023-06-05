import Hero from "../../../../components/hero";
import ServicesCards from "../../../../components/servicecards";
import { GoNote } from "react-icons/go";
import { TbReceiptTax } from "react-icons/tb";
import { IoMdBusiness } from "react-icons/io";
import { BsFileBinary } from "react-icons/bs";
import { AiOutlineProfile } from "react-icons/ai";
import { FaWpforms } from "react-icons/fa";

const post_info = {
  heading: "Income Tax",
  subheading: "",
};

const service = [
  {
    title: "Personal Tax Filing",
    href: "/personal-tax-filing",
    icon: TbReceiptTax,
    text: "we understand the importance of effectively managing your taxes and ensuring compliance with the law. In this guide, we will provide you with a step-by-step overview of the income tax filing process, along with essential tips and insights to help you maximize your tax benefits and navigate the complexities of the Indian tax system.",
  },
  {
    title: "Business Tax Filing",
    href: "/business-tax-filing",
    icon: IoMdBusiness,
    text: "we pride ourselves on providing top-notch business tax return filing services that are tailored to meet the specific needs of your company. Our team of highly skilled professionals understands the complexities of tax regulations and stays up to date with the latest changes in tax laws.",
  },
  {
    title: "Tax Notice",
    href: "/tax-notice",
    icon: GoNote,
    text: "we understand the importance of staying informed about income tax regulations and procedures in India. One crucial aspect of managing your finances effectively is comprehending income tax notices. In this comprehensive guide, we will delve into the intricacies of income tax notices, providing you with valuable insights and empowering you to navigate this process with confidence."
  },
  {
    title: "TDS Filing",
    href: "/tds-filing",
    icon: BsFileBinary,
    text: "TDS return filing is a crucial obligation for deductors in India. By understanding the nuances of TDS, following the correct filing process, and staying updated with the latest regulations, you can ensure compliance and avoid any penalties."
  },
  {
    title: "ITR-1 Return",
    href: "/itr-1-return",
    icon: AiOutlineProfile,
    text: "Filing income tax returns can be a daunting task, but with the ITR-1 Sahaj form, the process becomes considerably more manageable.",
  },
  {
    title: "ITR-2 Return",
    href: "/itr-2-return",
    icon: AiOutlineProfile,
    text: "Filing the ITR 2 form is a crucial step in fulfilling your income tax obligations. By accurately reporting your income, claiming deductions, and paying taxes on time, you ensure compliance with the tax laws and contribute to the nation's development.",
  },
  {
    title: "ITR-3 Return",
    href: "/itr-3-return",
    icon: AiOutlineProfile,
    text: "Filing your income tax return using the ITR-3 form is a crucial responsibility for businesses in India.",
  },
  {
    title: "ITR-4 Return",
    href: "/itr-4-return",
    icon: AiOutlineProfile,
    text: "the ITR-4 Sugam Form is an excellent choice for individuals and HUFs who have opted for the presumptive taxation scheme under Sections 44AD, 44ADA, or 44AE.",
  },
  {
    title: "ITR-5 Return",
    href: "/itr-5-return",
    icon: AiOutlineProfile,
    text: "At RNC Fintax, we strive to deliver the most comprehensive and detailed information on various topics, including the ITR-5 form.",
  },
  {
    title: "ITR-6 Return",
    href: "/itr-6-return",
    icon: AiOutlineProfile,
    text: "Filing your income tax return using the ITR-6 form is a crucial responsibility for businesses in India.",
  },
  {
    title: "ITR-7 Return",
    href: "/itr-7-return",
    icon: AiOutlineProfile,
    text: "Filing the ITR-7 form doesn't have to be a daunting task. By following the guidelines outlined in this comprehensive guide, you can streamline the process and ensure accurate submission",
  },
  {
    title: "Form 16",
    href: "/form-16",
    icon: FaWpforms,
    text: "Form 16 is an indispensable document that simplifies the tax filing process for salaried individuals in India."
  },
];

export default function IncomeTax() {
  return (
    <>
      <Hero data={post_info} />
      <section className="bg-gray-100">
        <div className="py-10 px-10 md:px-24 lg:px-0 max-w-5xl mx-auto md:grid-cols-2 lg:grid-cols-3 grid gap-5">
          <ServicesCards data={service} folder="/services/income-tax" />
        </div>
      </section>
    </>
  );
}
