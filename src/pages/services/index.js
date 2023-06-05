import Head from "next/head";
import Hero from "../../../components/hero";
import ServicesCards from "../../../components/servicecards";

const post_info = {
    heading: "Our Services",
    subheading: "",
};

export default function Services() {
    return (
        <>
            <Head>
                <title>{post_info.heading}</title>
            </Head>
            <Hero data={post_info} />
            <section className="bg-gray-100">
                <div className="py-10 px-10 md:px-24 lg:px-0 max-w-5xl mx-auto md:grid-cols-2 lg:grid-cols-3 grid gap-5">
                    <ServicesCards folder="services/" />
                </div>
            </section>
        </>
    );
}
