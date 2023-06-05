import { TiStar, TiStarHalf } from "react-icons/ti"

export default function ReviewCard({ data }) {
    return (
        <>
            <figure className="max-w-screen-md mx-auto text-center">
                <svg aria-hidden="true" className="w-12 h-12 mx-auto mb-3 text-gray-400" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
                <blockquote>
                    <q className="text-lg lg:text-2xl italic font-medium text-gray-900">{data.review}</q>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <cite className="pr-3 font-medium text-gray-900">{data.name}</cite>
                </figcaption>
                <Stars star={data.rating} />
            </figure>
        </>
    )
}

function Stars({ star }) {
    return (
        <div className="mt-4 flex gap-5 justify-center items-center text-sm text-gray-500">
            <h6 className="font-bold text-xl">{star > 5 ? '5.0' : star}</h6>
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