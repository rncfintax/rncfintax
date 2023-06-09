import { IoMdQuote } from "react-icons/io"
import { TiStar, TiStarHalf } from "react-icons/ti"

export default function ReviewCard({ data }) {
    return (
        <>
            <figure className="max-w-screen-md mx-auto text-center">
                <div className="text-slate-500 grid place-items-center mb-5">
                    <IoMdQuote fontSize={48} />
                </div>
                <blockquote>
                    <q className="text-lg lg:text-2xl italic font-medium text-gray-800">{data.review}</q>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <cite className="pr-3 font-medium text-gray-950">{data.name}</cite>
                </figcaption>
                <Stars star={data.rating} />
            </figure>
        </>
    )
}

function Stars({ star }) {
    return (
        <div className="mt-4 flex gap-5 justify-center items-center text-sm text-gray-500">
            <h4 className="font-bold text-xl">{star > 5 ? '5.0' : star}</h4>
            <ReviewStar rating={star} />
        </div>
    )
}

function ReviewStar({ rating }) {
    if (rating === 1) {
        return <TiStar fontSize={24} />
    }
    if (rating === 2) {
        return (
            <div className="flex gap-1 item-center text-yellow-300">
                <TiStar fontSize={24} />
                <TiStar fontSize={24} />
            </div>
        )
    }
    if (rating === 3) {
        return (
            <div className="flex gap-1 item-center text-yellow-300">
                <TiStar fontSize={24} />
                <TiStar fontSize={24} />
                <TiStar fontSize={24} />
            </div>
        )
    }
    if (rating === 4) {
        return (
            <div className="flex gap-1 item-center text-yellow-300">
                <TiStar fontSize={24} />
                <TiStar fontSize={24} />
                <TiStar fontSize={24} />
                <TiStar fontSize={24} />
            </div>
        )
    }
    if (rating === 5) {
        return (
            <div className="flex gap-1 item-center text-yellow-300">
                <TiStar fontSize={24} />
                <TiStar fontSize={24} />
                <TiStar fontSize={24} />
                <TiStar fontSize={24} />
                <TiStar fontSize={24} />
            </div>
        )
    }
    if (rating > 1 && rating < 2) {
        return (
            <div className="flex gap-1 item-center text-yellow-300">
                <TiStar fontSize={24} />
                <TiStarHalf fontSize={24} />
            </div>
        )
    }
    if (rating > 2 && rating < 3) {
        return (
            <div className="flex gap-1 item-center text-yellow-300">
                <TiStar fontSize={24} />
                <TiStar fontSize={24} />
                <TiStarHalf fontSize={24} />
            </div>
        )
    }
    if (rating > 3 && rating < 4) {
        return (
            <div className="flex gap-1 item-center text-yellow-300">
                <TiStar fontSize={24} />
                <TiStar fontSize={24} />
                <TiStar fontSize={24} />
                <TiStarHalf fontSize={24} />
            </div>
        )
    }
    if (rating > 4 && rating < 5) {
        return (
            <div className="flex gap-1 item-center text-yellow-300">
                <TiStar fontSize={24} />
                <TiStar fontSize={24} />
                <TiStar fontSize={24} />
                <TiStar fontSize={24} />
                <TiStarHalf fontSize={24} />
            </div>
        )
    }
    if (rating > 5) {
        return (
            <div className="flex gap-1 item-center text-yellow-300">
                <TiStar fontSize={24} />
                <TiStar fontSize={24} />
                <TiStar fontSize={24} />
                <TiStar fontSize={24} />
                <TiStar fontSize={24} />
            </div>
        )
    }
}