import Link from 'next/link'
import Head from 'next/head'
import '@splidejs/react-splide/css'
import { useEffect, useState } from 'react'
import reviews from "../../data/reviews.json"
import { BsArrowRight } from "react-icons/bs"
import BlogCard from "../../components/blogcard"
import LogoCloud from "../../components/logocloud"
import MarqueeFooter from "../../components/marquee"
import ReviewCard from "../../components/reviewcard"
import ServicesCards from '../../components/servicecards'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import TextTransition, { presets } from 'react-text-transition'
import { Josefin_Sans, DM_Serif_Display } from "next/font/google"
import Image from 'next/image'

const josefinsans = Josefin_Sans({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700'] })

const dm_serif_display = DM_Serif_Display({ subsets: ["latin"], weight: ['400'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>RNC Fintax</title>
        <meta name="keywords" content="RNC Fintax, rncfintax, Private Limited Company, Trademark, GST, Income Tax, TDS filing, Payroll, MSME registration"></meta>
        <meta name="description" content="A platform for Income tax filing, TDS filing, Company, MSME, Payroll, Copyright, Trademark, GST Registration. Unlock financial potential with RNC Fintax." />
      </Head>
      <Hero />
      <TagLine />
      <Stats />
      <Services />
      <HomeBlog />
      <Testimonial />
      <LogoCloud />
      <Link href="/contact">
        <MarqueeFooter />
      </Link>
    </>
  )
}

// const TEXTS = [
//   'We help Statups',
//   'Filing Income Tax',
//   'Goods & Service Tax Filing',
//   'Trademark Registration',
//   'Import Export Code Registration'
// ];

const hero_data = [
  {
    img: "/img/hero1.jpg",
    text: "Helping Business"
  },
  {
    img: "/img/hero2.jpg",
    text: "Goods & Service Tax Filing"
  },
  {
    img: "/img/hero3.jpg",
    text: "Startup Registration"
  },
  {
    img: "/img/hero4.jpg",
    text: "File Tax Return"
  }
]

function Hero() {
  return (
    <section className="bg-cover bg-center">
      <div className="h-80 lg:h-hero max-h-160 relative">
        <Splide options={{ type: 'loop', arrows: false, pagination: false, autoplay: "play", rewind: true, hasTrack: true }} aria-label="RNC Fintax">
          {
            hero_data.map((item, i) => (
              <SplideSlide className='relative' key={i}>
                <Image className='h-80 lg:h-hero w-full object-cover object-center absolute' alt={item.text} src={item.img} width={1600} height={500} />
                <div className='h-80 lg:h-hero w-full hover:backdrop-blur-sm bg-gray-950/30 relative flex flex-col justify-center items-center'>
                  <h1 className={`drop-shadow-2xl text-2xl sm:text-3xl lg:text-5xl text-white mb-2 md:mb-5 ${dm_serif_display.className}`}>{item.text}</h1>
                  <a className="text-white bg-gray-950 text-sm sm:text-base p-2 px-3 rounded-sm tracking-wide hover:drop-shadow-md" href="/book-appointment">Book Appointment</a>
                </div>
              </SplideSlide>
            ))
          }
        </Splide>
      </div>
    </section>
  )
}

function TagLine() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto grid place-items-center py-20">
        <q className={`mx-5 lg:mx-0 text-xl sm:text-2xl lg:text-3xl text-center leading-normal lg:leading-normal ${josefinsans.className}`}>Unlocking the financial potential with RNC Fintax, your trusted business advisory partner</q>
      </div>
    </section>
  )
}

function Stats() {
  const stats = [
    {
      num: '20k',
      info: 'Tax Return Filed'
    },
    {
      num: '100k',
      info: 'Invoice Uploaded'
    },
    {
      num: '1.2k',
      info: 'Local Client'
    }
  ]

  return (
    <section>
      <div className="flex px-5 lg:px-0 flex-col lg:flex-row py-20 gap-10 lg:gap-0 items-baseline max-w-5xl mx-auto">
        <div className="flex-1">
          <h2 className={`text-3xl lg:text-4xl font-semibold leading-snug lg:mb-3 ${josefinsans.className}`}>RNC Fintax Is For Everyone!</h2>
          <p className="text-lg leading-relaxed text-gray-700 lg:pr-3">RNC Fintax claims to be a solution for all your accounting problems, including services such as GST registration, company registration, income tax return filing, and trademark registration. They provide assistance and support in these areas to help businesses and individuals navigate the complexities of accounting and tax-related processes.</p>
          <Link href="/about" className="mt-6 font-medium flex items-center gap-2 hover:gap-4">
            <span className='hover:underline underline-offset-4'>About Us</span>
            <BsArrowRight />
          </Link>
        </div>
        <div className="flex-1 w-full grid grid-cols-2 gap-5 justify-center">
          {stats.map((e, i) =>
            <div className="p-4 py-6 bg-slate-50 border grid justify-center" key={i}>
              <h3 className={`font-semibold text-4xl mb-1 ${josefinsans.className}`}>{e.num}<span className='text-blue-500'>+</span></h3>
              <p className="text-gray-500 text-lg">{e.info}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="bg-slate-950">
      <div className='max-w-5xl mx-auto py-20 px-10 md:px-24 lg:px-0'>
        <div className="px-5 lg:px-0 flex justify-between items-center">
          <h2 className={`flex-1 text-2xl lg:text-4xl text-white ${dm_serif_display.className}`}>Our Services</h2>
          <div className="flex-1 flex justify-end">
            <Link href="/services" className="bg-white h-14 w-14 rounded-full flex justify-center items-center" aria-label="Services">
              <BsArrowRight fontSize={32} />
            </Link>
          </div>
        </div>
        <div className="pt-20 md:grid-cols-2 lg:grid-cols-3 grid gap-5">
          <ServicesCards NumOfCard={6} folder='services/' />
        </div>
      </div>
    </section>
  )
}

function HomeBlog() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-5xl py-20 mx-auto">
        <div className="px-5 lg:px-0 flex justify-between items-center">
          <h2 className={`flex-1 text-2xl lg:text-4xl ${dm_serif_display.className}`}>Our Latest Blog</h2>
          <div className="flex-1 flex justify-end">
            <Link href="/blog" className="bg-gray-300 h-14 w-14 rounded-full flex justify-center items-center" aria-label="Blogs">
              <BsArrowRight fontSize={32} />
            </Link>
          </div>
        </div>
        <div className="my-10 px-5 md:px-10 lg:px-0 home_blog grid items-stretch gap-5 place-items-center md:grid-cols-2 lg:grid-cols-3">
          <BlogCard page='/blog/' NumberOfPost={3} />
        </div>
      </div>
    </section>
  )
}

export function Testimonial() {
  return (
    <div className="py-20 px-5">
      <Splide options={{ arrows: false, pagination: false, autoplay: "play" }} aria-label="Testimonials">
        {reviews.map((item, i) => (
          <SplideSlide key={i}>
            <ReviewCard data={item} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}
