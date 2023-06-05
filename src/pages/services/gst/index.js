import Hero from "../../../../components/hero";
import ServicesCards from "../../../../components/servicecards";
import { TbTopologyComplex, TbTopologyFull, TbTopologyFullHierarchy, TbTopologyRing, TbTopologyStar, TbTopologyStar2, TbTopologyStar3, TbTopologyStarRing, TbTopologyStarRing2, TbTopologyStarRing3 } from "react-icons/tb";

const post_info = {
  heading: "Goods & Services Tax",
  subheading: "",
};

const service = [
  {
    title: "GST Registration",
    href: "/gst-registration",
    icon: TbTopologyStar,
    text: "Introduced on July 1, 2017, GST has revolutionized the Indian tax system by subsuming various indirect taxes such as VAT, excise duty, service tax, and more."
  },
  {
    title: "GST Return Filing",
    href: "/gst-return-filing",
    icon: TbTopologyComplex,
    text: "We understand the importance of seamless compliance with the Goods and Services Tax (GST) regulations in India. With the ever-evolving tax landscape, staying updated and ensuring accurate GST return filing is crucial for businesses to avoid penalties and maintain a healthy financial standing.",
  },
  {
    title: "GST LUT Filing",
    href: "/gst-lut-filing",
    icon: TbTopologyFullHierarchy,
    text: "A crucial aspect of Goods and Services Tax (GST) compliance for exporters. In this guide, we will delve into the intricate details of GST LUT, its significance, the procedure to obtain it, and its benefits for exporters in India.",
  },
  {
    title: "GST Registration Cancellation",
    href: "/gst-registration-cancellation",
    icon: TbTopologyFull,
    text: "Canceling your GST registration doesn't have to be a daunting task. With the right guidance and support from RNC Fintax, you can navigate the process smoothly and efficiently.",
  },
  {
    title: "GST Annual Return",
    href: "/gst-annual-return",
    icon: TbTopologyStarRing3,
    text: "Filing the GST annual return is a crucial task for businesses in India. It not only fulfills a statutory obligation but also demonstrates your compliance and transparency as a taxpayer.",
  },
  {
    title: "GST Invoicing",
    href: "/gst-invoicing",
    icon: TbTopologyStarRing,
    text: "Selecting the right GST software for your business can significantly simplify and streamline the GST compliance process.",
  },
  {
    title: "GST eInvoicing",
    href: "/gst-einvoicing",
    icon: TbTopologyRing,
    text: "Remember, understanding the nuances of GST e-invoicing and staying up-to-date with the latest developments are essential for businesses to stay competitive in today's dynamic business environment.",
  },
  {
    title: "eWay Bill",
    href: "/eway-bill",
    icon: TbTopologyStar2,
    text: "In conclusion, the E-Way Bill system has revolutionized goods transportation in India, bringing in efficiency, transparency, and tax compliance."
  },
  {
    title: "Input Tax Credit",
    href: "/input-tax-credit",
    icon: TbTopologyStar3,
    text: "Input Tax Credit (ITC) is a crucial mechanism under the GST system that allows businesses to claim credit for taxes paid on inputs.",
  },
  {
    title: "GST Software for Accountants",
    href: "/gst-software-for-accountants",
    icon: TbTopologyStarRing2,
    text: "Coming soon",
  },
];

export default function GoodsServiceTax() {
  return (
    <>
      <Hero data={post_info} />
      <section className="bg-gray-100">
        <div className="py-10 px-10 md:px-24 lg:px-0 max-w-5xl mx-auto md:grid-cols-2 lg:grid-cols-3 grid gap-5">
          <ServicesCards data={service} folder="/services/gst" />
        </div>
      </section>
    </>
  );
}
