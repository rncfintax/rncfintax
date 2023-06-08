import { createContext, useEffect, useState } from "react"

// create context
export const Context = createContext()

export default function MyContext({ children }) {
    // blogger blog post state
    const [bloggerPost, setBloggerPost] = useState([])
    // if post loading
    const [postLoading, setPostLoading] = useState(true)
    // current payment details
    const [paymentDetail, setPaymentDetail] = useState([])

    useEffect(() => {
        const url =
            "https://www.googleapis.com/blogger/v3/blogs/4966072662827198534/posts?key=AIzaSyAyU2_63wb3JZmm_T0lKodoVvpipnySLZs"

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setBloggerPost(data.items)
                setPostLoading(false)
            })
    }, [])

    return (
        <Context.Provider value={{
            bloggerPost,
            postLoading,
            paymentDetail,
            setPaymentDetail
        }}>
            {children}
        </Context.Provider>
    )
}
