import React from "react";
import JobSection from "./JobSection";
import AllBlogCards from "./AllBlogCards";
import EnquiryForm from "./EnquiryForm";
import {motion} from 'framer-motion'
const AboutUs = () => {
  window.scroll(0, 0);
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3 , duration:0.5,type:'spring  '}} className="container mx-auto my-8 p-8 mt-16 ">
      {/* <h1 className="text-3xl font-bold text-blue-500 mb-4">About Academic Pathway Experts</h1>

            <p className="text-gray-700 mb-6">
                Welcome to Academic Pathway Experts, your dedicated partner in realizing your dreams of studying and working in European countries. We are committed to providing comprehensive services to make your international journey seamless and rewarding.
            </p>

            <p className="text-gray-700 mb-6">
                At Academic Pathway Experts, we specialize in offering opportunities for both study and work across various European nations. Our range of services includes:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4">
                    <h2 className="text-xl font-semibold text-blue-500 mb-2">Study Programs</h2>
                    <p className="text-gray-700">
                        Explore a plethora of academic programs in collaboration with prestigious European universities. Our expert advisors will guide you in choosing the right course and assist you throughout the application process.
                    </p>
                </div>

                <div className="mb-4">
                    <h2 className="text-xl font-semibold text-blue-500 mb-2">Work Opportunities</h2>
                    <p className="text-gray-700">
                        Unlock your potential with work opportunities in thriving European job markets. We connect you with employers and provide support in securing internships, part-time jobs, and full-time employment during and after your studies.
                    </p>
                </div>
            </div>

            <p className="text-gray-700">
                Why Choose Academic Pathway Experts for your European adventure?
            </p>

            <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Experienced Advisors: Our team of advisors brings years of experience in international education and employment services.</li>
                <li>Global Network: Benefit from our extensive network of partner institutions and employers across Europe.</li>
                <li>Personalized Support: Receive personalized guidance tailored to your unique aspirations and requirements.</li>
                <li>Cultural Enrichment: Immerse yourself in the rich cultural experiences that European countries have to offer.</li>
            </ul>

            <p className="text-gray-700 mt-6">
                Embark on your European journey with Academic Pathway Experts and let us be your bridge to academic and professional success. Contact us today to start your adventure!
            </p> */}

      <div className=" w-4/5 mt-16 mx-auto">
        <div className="text-left">
          <span className="text-sm font-semibold text-rose-500 text-left">
            About us
          </span>
        </div>

        <div className=" grid grid-cols-4 gap-6 ">
          <div className="col-span-2 flex items-center justify-start text-left h-40 ">
            <p className="w-full text-5xl text-stone-900 font-bold ">
              We Make The Best For All Our Customers.
            </p>
          </div>
          <div className="h-full w-full flex  text-left text-stone-600 px-8 text-sm">
            <p className="leading-5">
              {" "}
              Unlock your potential with work opportunities in thriving European
              job markets. We connect you with employers and provide support in
              securing internships, part-time jobs, and full-time employment
              during and after your studies.
            </p>
          </div>
          <div className="h-full w-full flex  text-left text-stone-600 px-8 text-sm">
            <p className="leading-5">
              Explore a plethora of academic programs in collaboration with
              prestigious European universities. Our expert advisors will guide
              you in choosing the right course and assist you throughout the
              application process.
            </p>
          </div>
        </div>

        <div className="m-16">
          <div className="mt-32">
            <h1 className="text-4xl capitalize font-bold ">
              Why Choose Academic Pathway Experts for your Abroad adventure?
            </h1>
          </div>
          <div className="mt-12 w-fit mx-auto">
            <ul className="list-disc pl-6 mt-2 text-left w-fit mx-auto text-gray-700">
              <li className="mt-4">
                Experienced Advisors: Our team of advisors brings years of
                experience in international education and employment services.
              </li>
              <li className="mt-4">
                Global Network: Benefit from our extensive network of partner
                institutions and employers across Europe.
              </li>
              <li className="mt-4">
                Personalized Support: Receive personalized guidance tailored to
                your unique aspirations and requirements.
              </li>
              <li className="mt-4">
                Cultural Enrichment: Immerse yourself in the rich cultural
                experiences that European countries have to offer.
              </li>
            </ul>

            <p className="text-gray-700 mt-16 font-semibold">
              Embark on your European journey with Academic Pathway Experts and
              let us be your bridge to academic and professional success.
              Contact us today to start your adventure!
            </p>
          </div>
        </div>
      </div>
      <div>
        <JobSection />
      </div>

      <div className="mt-8">
      <AllBlogCards main={false} />
      </div>
    </motion.div>
  );
};

export default AboutUs;
