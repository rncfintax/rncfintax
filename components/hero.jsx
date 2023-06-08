import Head from "next/head";
import PaymentSection from "./paymentsection";

export default function Hero({ data }) {
  return (
    <>
      <Head>
        <title>{data.heading}</title>
        <meta name="description" content={data.subheading} />
        <meta property="og:title" content={data.heading} />
        <meta property="og:description" content={data.subheading} />
        <meta property="og:image" content="/img/thumb4.jpg" />
      </Head>
      <section className="bg-gradient-to-tr from-blue-500 via-blue-500 to-purple-600 text-center text-white">
        <div className="h-96 max-w-5xl px-5 lg:mx-auto flex flex-col gap-4 justify-center items-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl leading-relaxed lg:leading-normal font-dm_serif_display">
            {data.heading}
          </h1>
          <p className="sm:text-lg lg:text-xl">{data.subheading}</p>
        </div>
      </section>
      {data.plan ? <PaymentSection data={data} /> : ""}
    </>
  );
}
