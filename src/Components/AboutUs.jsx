import React from 'react';

const AboutUs = () => {
    return (
        <div className="container mx-auto my-8 p-8 mt-16 bg-gray-100 rounded shadow-md">
            <h1 className="text-3xl font-bold text-blue-500 mb-4">About Academic Pathway Experts</h1>

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
            </p>
        </div>
    );
};

export default AboutUs;
