import { Testimonial } from "."
import Hero from "../../components/hero"

const post_info = {
    heading: "Reviews",
    subheading: "See Why People Love RNC Fintax."
}

export default function Reviews() {
    return (
        <>
            <Hero data={post_info} />
            <Testimonial />
        </>
    )
}