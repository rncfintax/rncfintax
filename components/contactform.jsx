import { useState } from "react"

export default function ContactForm() {
    const [resMsg, setResMsg] = useState("")

    const sheetURL = "https://script.google.com/macros/s/AKfycbyn67dLN6useZWwXHrWVDyfC8fzlM0Q1u60pTWRWX70jDcYHdvhvJCYGTBrA-12Bq83/exec"

    function handleForm(e) {
        e.preventDefault()

        const form = document.forms["google-sheet"]

        fetch(sheetURL, { method: "POST", body: new FormData(form) })
            .then(res => {
                form.reset()
                setResMsg("Your respose is submitted")
            })
            .catch(err => {
                console.error("Error!", err.message)
                setResMsg("something went wrong")
            })
    }

    return (
        <>
            <form className="accent-blue-500" onSubmit={handleForm} method="post" autoComplete="off" name="google-sheet">
                <div className="relative mb-4">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name*</label>
                    <input type="text" id="name" name="Name" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required placeholder="Ram Singh" />
                </div>
                <div className="relative mb-4">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email*</label>
                    <input pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$" type="email" id="email" name="Email" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required placeholder="ramsingh@gmail.com" />
                </div>
                <div className="relative mb-4">
                    <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone*</label>
                    <input pattern="^(0|91)?[6-9][0-9]{9}$" type="tel" id="phone" name="Phone" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required placeholder="9256317271" />
                </div>
                <div className="relative mb-4">
                    <label htmlFor="category" className="leading-7 text-sm text-gray-600">Select Category*</label>
                    <div>
                        <span className="flex gap-2" key={1}>
                            <input id="CompanyRegistration" type="radio" name="Category" required value="Company Registration" />
                            <label htmlFor="CompanyRegistration">Company Registration</label>
                        </span>
                        <span className="flex gap-2" key={2}>
                            <input id="GSTRelated" type="radio" name="Category" required value="GST Related" />
                            <label htmlFor="GSTRelated">GST Related</label>
                        </span>
                        <span className="flex gap-2" key={3}>
                            <input id="IncomeTaxReturn" type="radio" name="Category" required value="Income Tax Return" />
                            <label htmlFor="IncomeTaxReturn">Income Tax Return</label>
                        </span>
                        <span className="flex gap-2" key={4}>
                            <input id="MSMEUdyogAadhar" type="radio" name="Category" required value="MSME/Udyog Aadhar" />
                            <label htmlFor="MSMEUdyogAadhar">MSME/Udyog Aadhar</label>
                        </span>
                        <span className="flex gap-2" key={5}>
                            <input id="TrademarkRegistration" type="radio" name="Category" required value="Trademark Registration" />
                            <label htmlFor="TrademarkRegistration">Trademark Registration</label>
                        </span>
                        <span className="flex gap-2" key={6}>
                            <input id="FoodLicenseFSSAI" type="radio" name="Category" required value="Food License/FSSAI" />
                            <label htmlFor="FoodLicenseFSSAI">Food License/FSSAI</label>
                        </span>
                        <span className="flex gap-2" key={7}>
                            <input id="AnnualFilingPvtLtdLLP" type="radio" name="Category" required value="Annual Filing Pvt Ltd/LLP" />
                            <label htmlFor="AnnualFilingPvtLtdLLP">Annual Filing Pvt Ltd/LLP</label>
                        </span>
                        <span className="flex gap-2" key={8}>
                            <input id="Others" type="radio" name="Category" required value="Others" />
                            <label htmlFor="Others">Others</label>
                        </span>
                    </div>
                </div>
                <div className="relative mb-4">
                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                    <textarea id="message" name="Message" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
                <input type="submit" className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg w-full" />
                <p className="text-center mt-3">{resMsg}</p>
            </form>
        </>
    )
}