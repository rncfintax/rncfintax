import FAQ, { FAQWrapper } from "../../components/faq";
import Hero from "../../components/hero";

const post_info = {
  heading: "Frequently Asked Questions",
  subheading: "Have questions? we're here to help."
}

export default function FAQs() {
  return (
    <>
      <Hero data={post_info} />
      <section className="py-10 bg-gray-100">
        <FAQWrapper>
          {faq_data.map((e, i) => <FAQ key={i} data={e} />)}
        </FAQWrapper>
      </section>
    </>
  );
}

const faq_data = [
  {
    qus: "What is the full form of FSSAI?",
    ans: "The full form of FSSAI is the Food Safety and Standards Authority of India."
  },
  {
    qus: "Is FSSAI registration or license mandatory for all food businesses?",
    ans: "Yes, FSSAI registration or license is mandatory for all food businesses in India."
  },
  {
    qus: "What is the FSSAI logo?",
    ans: "The FSSAI logo is a circular blue and green logo with the FSSAI acronym in the center."
  },
  {
    qus: "What are the penalties for non-compliance with FSSAI regulations?",
    ans: "The penalties for non-compliance with FSSAI regulations can range from fines to imprisonment and cancellation of FSSAI registration or license."
  },
  {
    qus: "How can I apply for FSSAI registration or license?",
    ans: "FSSAI registration or license can be applied for online through the FSSAI website or offline through the Form"
  },
  {
    qus: "Is GST registration mandatory for freelancers?",
    ans: "It depends on their annual turnover. If their turnover exceeds the threshold limit of Rs. 20 lakhs (Rs. 10 lakhs for Northeastern and hilly states), they are required to register for GST."
  },
  {
    qus: "Can a business with turnover less than Rs. 40 lakhs register for GST?",
    ans: "Yes, businesses with turnover below the threshold limit can opt for voluntary registration under GST."
  },
  {
    qus: "How long does it take to complete the GST registration process?",
    ans: "The online registration process for GST can be completed within a few working days, provided all the necessary documents are in place."
  },
  {
    qus: "Can GST registration be cancelled?",
    ans: "Yes, GST registration can be cancelled if the business ceases operations or if the registration was obtained by fraudulent means."
  },
  {
    qus: "Is it necessary to have a digital signature for GST registration?",
    ans: "Yes, a digital signature is mandatory for GST registration. It is used to verify the authenticity of the applicant's documents and signature."
  },
  {
    qus: "What is GST return filing?",
    ans: "GST return filing is the process of submitting a document to the GST authorities that shows the details of a taxpayer's sales, purchases, tax collected, and tax paid."
  },
  {
    qus: "How often do I need to file GST returns?",
    ans: "The frequency of GST return filing varies depending on the category of the taxpayer. There are monthly, quarterly, and annual GST returns."
  },
  {
    qus: "What happens if I don't file my GST returns on time?",
    ans: "If you don't file your GST returns on time, you may have to pay penalties and interest."
  },
  {
    qus: "Can I file my GST returns after the due date?",
    ans: "Yes, you can file your GST returns after the due date. However, you may have to pay penalties and interest."
  },
  {
    qus: "How can I file my GST returns?",
    ans: "GST returns can be filed online through the GST portal. Taxpayers can also seek the assistance of GST practitioners or tax professionals to file their GST returns."
  },
  {
    qus: "What is the due date for filing income tax returns?",
    ans: "The due date for filing income tax returns in India is 31st July of the assessment year for individual taxpayers."
  },
  {
    qus: "What happens if I do not file my income tax returns on time?",
    ans: "If you do not file your income tax returns on time, you may have to pay a penalty of up to Rs. 10,000."
  },
  {
    qus: "What is a trademark?",
    ans: "A trademark is a unique symbol, word, or phrase that identifies and distinguishes a business or product from others in the market."
  },
  {
    qus: "Can I trademark my business name?",
    ans: "Yes, you can trademark your business name, logo, or slogan to protect your brand identity."
  },
  {
    qus: "How long does the trademark registration process take?",
    ans: "The trademark registration process usually takes 6-8 months, but it can take longer if there are objections or oppositions to the application."
  },
  {
    qus: "What is the difference between a trademark and a copyright?",
    ans: "A trademark protects a business's brand identity, while a copyright protects original works of authorship, such as books, music, and art."
  },
  {
    qus: "Can I file a trademark application myself, or do I need a lawyer?",
    ans: "While you can file a trademark application yourself, it is recommended to seek the assistance of a lawyer or trademark professional to ensure your application is filed correctly and to maximize the chances of success."
  },
  {
    qus: "What is ISO?",
    ans: "ISO stands for International Organization for Standardization, an independent, non-governmental international organization that develops and publishes standards for various industries."
  },
  {
    qus: "What is ISO certification?",
    ans: "ISO certification is a process by which a business can obtain certification for compliance with ISO standards."
  },
  {
    qus: "What are the benefits of ISO certification?",
    ans: "The benefits of ISO certification include improved credibility, efficiency, customer satisfaction, environmental sustainability, information security, and occupational health and safety."
  },
  {
    qus: "How often do I need to renew my ISO certification?",
    ans: "ISO certification is valid for three years, after which a business must undergo a recertification audit to renew its certification."
  },
  {
    qus: "Is ISO certification mandatory?",
    ans: "ISO certification is not mandatory, but it can bring many benefits to a business, such as improved credibility, efficiency, and customer satisfaction."
  }
];
