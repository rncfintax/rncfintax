import Link from "next/link";
import {
  BsFacebook,
  BsInstagram,
  BsWhatsapp,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";

const social = [
  {
    title: "Facebook",
    icon: BsFacebook,
    link: "https://www.facebook.com/rncfintax",
  },
  {
    title: "Instagram",
    icon: BsInstagram,
    link: "https://www.instagram.com/rncfintax/",
  },
  {
    title: "Whatsapp",
    icon: BsWhatsapp,
    link: "https://api.whatsapp.com/send?phone=15551234567",
  },
  {
    title: "Linkedin",
    icon: BsLinkedin,
    link: "#",
  },
  {
    title: "Twitter",
    icon: BsTwitter,
    link: "https://twitter.com/rncfintax",
  },
];

const footerLinks = [
  {
    title: "Services",
    links: [
      { title: "Startups", href: "/services/startups" },
      { title: "Income Tax", href: "/services/income-tax" },
      { title: "GST", href: "/services/gst" },
      { title: "Trademark", href: "/services/trademark" },
      { title: "MCS Services", href: "/services/mcs-services" },
      { title: "Import Export", href: "/services/import-export" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Home", href: "/" },
      { title: "About", href: "/about" },
      { title: "Blog", href: "/blog" },
      { title: "Services", href: "/services" },
      { title: "FAQs", href: "/faqs" },
      { title: "Reviews", href: "/reviews" },
    ],
  },
  {
    title: "Links",
    links: [
      { title: "GST Health Checkup", href: "landing/gst-health-checkup" },
      { title: "Income Tax Return", href: "landing/income-tax-return" },
      { title: "Book Appointment", href: "/book-appointment" },
      { title: "Contact", href: "/contact" },
      { title: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
  {
    title: "Contact",
    links: [
      { title: "rncfintax@gmail.com", href: "mailto:rncfintax@gmail.com" },
      { title: "+91 9876543210", href: "tel:+91 9876543210" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 top-full sticky">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          {footerLinks.map((item, i) => (
            <div key={i}>
              <h2 className="mb-4 text-sm font-semibold uppercase text-white">
                {item.title}
              </h2>
              <ul className="text-gray-400 font-medium">
                {item.links.map((e, j) => (
                  <li key={j} className="mb-2 break-words">
                    <Link href={e.href} className="hover:underline">
                      {e.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl px-4 py-6 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-300 sm:text-center">
            © {new Date().getFullYear()} <Link href="/">RNC Fintax</Link>. All
            Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
            {social.map((item, i) => (
              <SocialIcon
                key={i}
                URL={item.link}
                Tag={item.icon}
                Title={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ Tag, size = 18, URL, Title }) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={URL}
      className="text-gray-300 hover:text-white"
    >
      <Tag fontSize={size} />
      <span className="sr-only">{Title}</span>
    </a>
  );
}
