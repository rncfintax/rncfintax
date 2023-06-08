import { useRouter } from "next/router";
import { useContext } from "react";
import { MdDone } from "react-icons/md"
import { FaStarOfLife } from "react-icons/fa"
import { Context } from "../script/context";

export default function PaymentSection({ data }) {
  return (
    <section className="max-w-4xl p-5 md:p-0 md:py-5 mx-auto my-10 bg-gray-100 lg:p-5 rounded-md border border-gray-300">
      <div className="flex gap-4 flex-col lg:flex-row">
        {/* if document required avaliable */}
        {data.doc_req.length !== 0 ?
          <div className="flex-1">
            <h3 className="text-xl mb-4 font-semibold">Documents Required</h3>
            <ul className="ml-5">
              {data.doc_req.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <MdDone className="text-green-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div> : ""}
        {/* if features avalible */}
        {
          data.features ?
            <div className="flex-1">
              <h3 className="text-xl mb-4 font-semibold">Features</h3>
              <ul className="ml-5">
                {data.features.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <MdDone className="text-green-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            :
            null
        }
        <div className={`flex-1 grid ${data.doc_req.length !== 0 ? "grid-flow-row" : data.features ? "grid-flow-row" : "grid-flow-col grid-cols-3"} gap-4`}>
          {data.plan.map((item, i) => (
            <PayCard key={i} data={item} heading={data.heading} />
          ))}
        </div>
      </div>
      <div>
        <p className="text-gray-800 text-sm mt-2"><span className="text-red-600">*</span> Government Fees Included</p>
      </div>
    </section>
  );
}

function PayCard({ data, heading }) {
  const router = useRouter()
  const { setPaymentDetail } = useContext(Context)

  const offer = data.price - Math.floor(data.price * (data.percentage / 100))

  function handlePaymentDetail() {
    setPaymentDetail([data, heading])
    router.push('/payment')
  }

  return (
    <div className="bg-white p-2 lg:p-5 border border-gray-300 rounded-md drop-shadow-sm flex flex-col justify-between">
      <h3 className="font-bold uppercase mb-2">{data.name} Plan</h3>
      {data.list.length <= 1 ?
        <p>
          {data.list[0]}
        </p>
        :
        <ul className="text-sm">
          {data.list.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <FaStarOfLife className="text-blue-500 block" fontSize={12} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      }
      {
        data.price ?
          <>
            <div className="my-4 text-sm">
              <p className="mb-2">
                <span>Market Price: </span>
                <span className="text-gray-500 font-medium line-through">₹ {data.price}</span>
              </p>
              <p>
                <span>RNCFintax: </span>
                <span className="text-green-700 font-semibold">
                  ₹ {offer}
                </span>
                <span className="ml-5 text-white bg-green-700 p-px px-1">{data.percentage}% Off</span>
              </p>
            </div>
            <button className="rounded-md bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600" onClick={handlePaymentDetail}>
              Get Started
            </button>
          </>
          :
          <a target="_blank" rel="noreferrer" href={`https://api.whatsapp.com/send?phone=9256317271&text=${heading}: ${data.name} Plan`} className="mt-4 text-center rounded-md bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-700">
            Connect with Advisor
          </a>
      }
    </div >
  );
}
