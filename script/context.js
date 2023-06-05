import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth"
import { init } from "./firebase";

// create context
export const Context = createContext()

// firebase
const auth = getAuth(init)
auth.languageCode = 'it'

const provider = new GoogleAuthProvider()

const signIn = async () => {
    const result = await signInWithPopup(auth, provider)
}

export default function MyContext({ children }) {
    const [user, loading] = useAuthState(auth)

    // blogger blog post state
    const [bloggerPost, setBloggerPost] = useState([])
    // if post loading
    const [postLoading, setPostLoading] = useState(true)

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
            auth,
            user,
            loading,
            signIn,
            bloggerPost,
            postLoading,
        }}>
            {children}
        </Context.Provider>
    )
}
