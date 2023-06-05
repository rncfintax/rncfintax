import Head from "next/head";
import Hero from "../../components/hero";
import ContactForm from "../../components/contactform";
import ArticleWrapper from "../../components/articlewrapper";

const post_info = {
  heading: "Now Book Consultancy at Lowest Cost with RNC Fintax",
  subheading: "",
};

export default function BookAppointment() {
  return (
    <>
      <Head>
        <title>Book Consultancy</title>
      </Head>
      <Hero data={post_info} />
      <div className="max-w-xl mx-5 lg:mx-auto my-20">
        <h2 className="text-gray-900 text-3xl text-center font-semibold mb-1 title-font">
          Book Consultancy
        </h2>
        <p className="leading-relaxed mb-5 text-gray-600 text-center">
          Post-ironic portland shabby chic echo park, banjo fashion axe
        </p>
        <ContactForm />
        <ArticleWrapper>
          <Article />
        </ArticleWrapper>
      </div>
    </>
  );
}

function Article() {
  return <article></article>;
}
