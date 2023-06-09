import Head from "next/head"
import { useState, useContext } from "react"
import { Context } from "../../../script/context"
import BlogCard from "../../../components/blogcard"
import { DM_Serif_Display } from "next/font/google"

const dm_serif_display = DM_Serif_Display({ subsets: ["latin"], weight: ['400'] })

export default function Blog() {
    const [pagNum, setPagNum] = useState(1)
    const { bloggerPost, postLoading } = useContext(Context)
    const pstLen = postLoading ? 0 : bloggerPost.length

    // total number of post display initially
    const initPost = 10

    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>
            <div className="bg-gray-50 pb-20">
                <section className="text-center max-w-4xl mx-auto py-20">
                    <h1 className={`text-4xl mb-2 ${dm_serif_display.className}`}>Latest Blogs</h1>
                    <p className="text-lg mx-5 lg:mx-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi nobis magni recusandae molestiae minus optio, provident, consequuntur error voluptatem blanditiis architecto. Est?</p>
                </section>
                <section className="md:max-w-3xl lg:max-w-5xl mx-auto px-5 lg:px-0">
                    <div className="grid items-stretch gap-4 place-items-center md:grid-cols-2 lg:grid-cols-3">
                        <BlogCard page='blog/' NumberOfPost={initPost * pagNum} />
                    </div>
                    <div className={`grid place-items-center mt-10 ${pstLen <= initPost * pagNum ? "hidden" : ""}`}>
                        <button onClick={() => setPagNum(pagNum + 1)} className="text-white bg-blue-500 hover:bg-blue-600 rounded-full p-5 py-2 drop-shadow-md hover:drop-shadow-none">Load More</button>
                    </div>
                </section>
            </div>
        </>
    )
}