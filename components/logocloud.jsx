import { BsFacebook, BsGoogle, BsInstagram, BsMicrosoft, BsYoutube } from "react-icons/bs"

export default function LogoCloud() {
    return (
        <div className="py-24 bg-gray-50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                    Our Advertising Partner
                </h2>
                <div className="mt-10 mx-auto grid max-w-lg lg:max-w-none grid-cols-4 items-center sm:max-w-xl sm:grid-cols-6 lg:mx-0 lg:grid-cols-5 text-gray-600 justify-items-center justify-center gap-10 lg:gap-0">
                    <BsFacebook fontSize={48} />
                    <BsGoogle fontSize={48} />
                    <BsMicrosoft fontSize={48} />
                    <BsInstagram fontSize={48} />
                    <BsYoutube className="hidden sm:block" fontSize={48} />
                </div>
            </div>
        </div>
    )
}

// function Img() {
//     return (
//         <img loading='lazy'
//             className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
//             src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
//             alt="Statamic"
//             width={158}
//             height={48}
//         />
//     )
// }