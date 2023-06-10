import Head from "next/head"
import { useRouter } from "next/router"
import { BiFootball } from "react-icons/bi"
import { HiUserCircle } from "react-icons/hi"
import { Context } from "../../../script/context"
import { useEffect, useState, useContext } from "react"
import { Josefin_Sans } from "next/font/google"

const josefinsans = Josefin_Sans({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700'] })

export default function BlogPost() {
    const { query } = useRouter()
    const { bloggerPost, postLoading } = useContext(Context)
    const [myPost, setMyPost] = useState({})

    useEffect(() => {
        bloggerPost.filter(item => {
            if (item.url.includes(query.slug)) {
                setMyPost(item)
            }
        })
    })

    return (
        <>
            <Head>
                <title>{postLoading ? "Loading" : myPost.title}</title>
            </Head>
            <section className="my-10 max-w-2xl md:mx-auto lg:my-20">
                <div className="items-baseline">
                    {postLoading ? <LoadingComponent /> : <Content data={myPost} />}
                </div>
            </section>
        </>
    )
}

function LoadingComponent() {
    return (
        <div className="grid place-items-center">
            <div className="animate-bounce scale-150 grid place-items-center">
                <BiFootball fontSize={64} />
            </div>
            <div className="bg-gray-950 w-8 blur-sm rounded-full h-1"></div>
        </div>
    )
}

function Content({ data }) {
    // format date
    function date(date) {
        return new Date(date).toLocaleString("us-en", { day: "numeric", month: "short", year: "numeric" })
    }

    function createMarkup() {
        return { __html: data.content }
    }

    function MyComponent() {
        return <div dangerouslySetInnerHTML={createMarkup()} />
    }

    return (
        <>
            <div className="mb-1 mx-5 sm:mx-0">
                <h1 className={`text-2xl md:text-4xl mb-3 leading-relaxed font-bold ${josefinsans.className}`}>{data.title}</h1>
                <div className="flex justify-between items-center">
                    <h5 className="flex items-center gap-2 text-gray-700 mb-4">
                        <HiUserCircle fontSize={20} />
                        <span>RNC Fintax</span>
                        <span>-</span>
                        <span>{date(data.published)}</span>
                    </h5>
                </div>
            </div>
            <section className="articleWrapper max-w-4xl mx-auto article my-0">
                <MyComponent />
            </section>
        </>
    )
}
