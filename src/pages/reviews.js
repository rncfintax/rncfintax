import Head from "next/head"
import { Testimonial } from "."
import Hero from "../../components/hero"

const post_info = {
    heading: "Reviews",
    subheading: "See Why People Love RNC Fintax."
}

export default function Reviews() {
    return (
        <>
            <Head>
                <title>Reviews</title>
            </Head>
            <Hero data={post_info} />
            <Testimonial />
        </>
    )
}