import '../styles/globals.css'
import MyContext from '../../script/context'
import Header from '../../components/header'
import Footer from '../../components/footer'
import FixedButton from '../../components/fixedbutton'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

export default function App({ Component, pageProps }) {
  return (
    <MyContext>
      <main className={`min-h-screen ${poppins.className}`}>
        <Header />
        <FixedButton />
        <Component {...pageProps} />
        <Footer />
      </main>
    </MyContext>
  )
}
