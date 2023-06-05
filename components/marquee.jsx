import Marquee from "react-fast-marquee"
import { GiStarShuriken } from "react-icons/gi"

export default function MarqueeFooter() {
  const arr = [0, 1, 2, 3]

  return (
    <div className="bg-gradient-to-r from-blue-500 via-blue-500 to-violet-500">
      <Marquee
        speed={20}
        gradient={false}
        className="max-w-screen-2xl mx-auto py-10">
        {arr.map(item => <MarqueeText key={item} />)}
      </Marquee>
    </div>
  )
}

function MarqueeText() {
  return (
    <div className="flex items-center uppercase text-white text-5xl font-semibold">
      <h2>Get In Touch</h2>
      <GiStarShuriken fill="white" fontSize={50} className="mx-6" />
    </div>
  )
}