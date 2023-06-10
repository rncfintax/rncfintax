import { FaWhatsapp } from "react-icons/fa"

export default function FixedButton() {
    return (
        <section className="fixed right-8 bottom-8 z-50">
            <a target="_blank" aria-label="WhatsApp" rel="noreferrer" href="https://api.whatsapp.com/send?phone=+919256317271" className="bg-gradient-to-tr from-green-400 to-green-500 p-3 rounded-full block  drop-shadow-xl">
                <FaWhatsapp fill="white" fontSize={32} />
            </a>
        </section>
    )
}