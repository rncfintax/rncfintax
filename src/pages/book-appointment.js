import Hero from "../../components/hero";
import ContactForm from "../../components/contactform";

const post_info = {
  heading: "Book Appointment at RNC Fintax",
  subheading: "",
};

export default function BookAppointment() {
  return (
    <>
      <Hero data={post_info} />
      <div className="max-w-xl mx-5 lg:mx-auto my-20">
        <h2 className="text-gray-900 text-3xl text-center font-semibold mb-1 title-font">
          Book Appointment
        </h2>
        <p className="leading-relaxed mb-5 text-gray-600 text-center">
          Post-ironic portland shabby chic echo park, banjo fashion axe
        </p>
        <ContactForm />
      </div>
    </>
  )
}
