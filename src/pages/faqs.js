import Head from "next/head";
import FAQ, { FAQWrapper } from "../../components/faq";

export default function FAQs() {
  return (
    <>
      <Head>
        <title>FAQs</title>
      </Head>
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
    qus: "Voluptatem cum aspernatur magni, ratione vitae ipsam pariatur omnis nam ab nihil excepturi culpa.",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum aspernatur magni, ratione vitae ipsam pariatur omnis nam ab nihil excepturi culpa.",
  },
  {
    qus: "Sit amet consectetur adipisicing elit. Voluptatem cum aspernatur magni, ratione vitae ipsam pariatur omnis",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum aspernatur magni, ratione vitae ipsam pariatur omnis nam ab nihil excepturi culpa.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum aspernatur magni, ratione vitae ipsam pariatur omnis nam ab nihil excepturi culpa.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum aspernatur magni, ratione vitae ipsam pariatur omnis nam ab nihil excepturi culpa.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum aspernatur magni, ratione vitae ipsam pariatur omnis nam ab nihil excepturi culpa.",
  },
  {
    qus: "Ratione vitae ipsam pariatur omnis nam ab",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum aspernatur magni, ratione vitae ipsam pariatur omnis nam ab nihil excepturi culpa.",
  },
  {
    qus: "Pariatur omnis nam ab nihil excepturi culpa.",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum aspernatur magni, ratione vitae ipsam pariatur omnis nam ab nihil excepturi culpa.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum aspernatur magni, ratione vitae ipsam pariatur omnis nam ab nihil excepturi culpa.",
  },
  {
    qus: "Rratione vitae ipsam pariatur omnis nam ab nihil excepturi culpa.",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum aspernatur magni, ratione vitae ipsam pariatur omnis nam ab nihil excepturi culpa.",
  },
];
