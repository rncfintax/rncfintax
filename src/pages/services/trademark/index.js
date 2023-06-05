import Hero from "../../../../components/hero";
import ServicesCards from "../../../../components/servicecards";
import { FaSnowflake, FaStarOfLife } from "react-icons/fa";
import { HiUser } from "react-icons/hi";
import { MdAutorenew, MdDesignServices } from "react-icons/md";
import { BiCopyright } from "react-icons/bi";
import { GiAxeSword, GiOppositeHearts } from "react-icons/gi";
import { TbTrademark } from "react-icons/tb";

const post_info = {
  heading: "Trademark",
  subheading: "",
};

const service = [
  {
    title: "Trademark Registration",
    href: "/trademark-registration",
    icon: TbTrademark,
    text: "Trademark registration for businesses In today's competitive market, establishing a strong brand identity is crucial for success.",
  },
  {
    title: "Trademark Objection",
    href: "/trademark-objection",
    icon: GiAxeSword,
    text: "Trademarks play a crucial role in safeguarding your brand identity and distinguishing your products or services from competitors. ",
  },
  {
    title: "Trademark Opposition",
    href: "/trademark-opposition",
    icon: GiOppositeHearts,
    text: "We will delve into the intricacies of trademark opposition, exploring its significance, process, and potential strategies.",
  },
  {
    title: "Trademark Renewal",
    href: "/trademark-renewal",
    icon: MdAutorenew,
    text: "We understand the significance of trademark renewal in safeguarding your brand's identity and ensuring its longevity in the dynamic business landscape",
  },
  {
    title: "Copyright Registration",
    href: "/copyright-registration",
    icon: BiCopyright,
    text: "We understand the critical role that copyright plays in safeguarding intellectual property and ensuring the growth and protection of businesses",
  },
  {
    title: "Design Registration",
    href: "/design-registration",
    icon: MdDesignServices,
    text: "We understand the value of safeguarding your creative designs and ensuring that your innovative ideas remain protected from unauthorized use.",
  },
  {
    title: "Provisional Patent",
    href: "/provisional-patent",
    icon: FaSnowflake,
    text: "Significance of protecting your intellectual property and ensuring its legal recognition.",
  },
  {
    title: "Patent Registration",
    href: "/patent-registration",
    icon: HiUser,
    text: "We provide you with expert insights and detailed information to help you navigate the process of protecting your valuable intellectual property.",
  },
  {
    title: "Find trademark class for over 8000 goods and services",
    href: "/trademark-class-finder",
    icon: FaStarOfLife,
    text: "",
  },
];

export default function Trademark() {
  return (
    <>
      <Hero data={post_info} />
      <section className="bg-gray-100">
        <div className="py-10 px-10 md:px-24 lg:px-0 max-w-5xl mx-auto md:grid-cols-2 lg:grid-cols-3 grid gap-5">
          <ServicesCards data={service} folder="/services/trademark" />
        </div>
      </section>
    </>
  );
}
