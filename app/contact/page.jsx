"use client";

import Image from "next/image";
import { useState } from "react";

/* SOCIAL ICON COMPONENT */
function SocialIcon({ type }) {
    const icons = {
        instagram: "/instagram.png",
        facebook: "/Facebook.png",
        whatsapp: "/whatsapp.png"
    };

    return (
        <div className="w-7 h-7 relative cursor-pointer hover:opacity-90 transition-opacity shadow-md rounded-full overflow-hidden">
            <Image
                src={icons[type]}
                alt={type}
                fill
                className="object-cover"
            />
        </div>
    );
}

/* REUSABLE INPUT COMPONENT */
function Input({ label, placeholder, type = "text", name, value, onChange }) {
    return (
        <div className="w-full">
            <label className="block text-sm font-medium text-[#333333] mb-1">{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full text-base border-b border-gray-300 bg-transparent outline-none py-1 text-gray-700 placeholder-gray-400 focus:border-black transition-colors"
                required
            />
        </div>
    );
}

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        telephone: "",
        message: "",
    });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { firstName, lastName, email, telephone, message } = formData;

        const text = encodeURIComponent(
            `Hello Original Oils 👋\n\n` +
            `Name: ${firstName} ${lastName}\n` +
            `Email: ${email}\n` +
            `Phone: ${telephone}\n\n` +
            `Message:\n${message}`
        );

        window.open(`https://wa.me/918078112788?text=${text}`, "_blank");
    };


    return (
        <main
            className="relative min-h-screen overflow-hidden text-[#171717]"
            style={{
                backgroundImage: "url('/contact-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* <div className="max-w-[1400px] mx-auto h-full px-8 py-10 lg:px-20 lg:py-16"> */}
            <div className="py-8">
                {/* HERO SECTION */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-1 lg:mb-4 px-4 lg:px-5">

                    {/* LEFT HEADER */}
                    <div className="flex flex-col justify-center space-y-2 ">
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-black">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                </svg>
                            ))}
                        </div>

                        <p className="text-[#666666] tracking-wider text-lg">
                            Feel free to contact us
                        </p>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-[#333333] leading-tight">
                            We're Here for <br className="hidden sm:block" /> Your Wellness
                        </h1>

                    </div>

                    <div className="flex justify-start lg:justify-end items-start lg:items-end mt-6 lg:mt-0">
                        <div className="max-w-md text-left lg:text-right text-gray-500 text-xl lg:text-2xl leading-relaxed font-light">
                            Reach out with questions, bookings,<br className="hidden lg:block" />
                            or anything you need.
                        </div>
                    </div>
                </div>

                {/* CONTENT GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 pt-3">
                    <div className="lg:col-span-4 relative flex flex-col ">
                        {/* CONTACT DETAILS */}
                        <div className="space-y-3 pl-2 lg:pl-6 z-20 relative">
                            <div>
                                <h3 className="text-2xl font-small text-[#333333] mb-1">Contact Us</h3>
                                <a href="mailto:info@originaloils.org" className="text-gray-500 text-md border-b border-gray-400  hover:text-black transition-colors">
                                    info@originaloils.org
                                </a>
                            </div>
                            <div>
                            <h3 className="text-2xl font-small text-[#333333] mb-1">
                                Amazon Store
                            </h3>

                            <a
                                href="https://www.amazon.in/stores/ArtisansOriginalOils/page/5ADBAB2B-9076-425E-862A-71825817EC6E"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 text-md border-b border-gray-400  hover:text-black transition-colors break-words"
                            >
                                Visit Our Amazon Store
                            </a>
                            </div>

                            <div>
                                <h3 className="text-2xl font-small text-[#333333] mb-1">Call Us</h3>
                                <a href="tel:+918078112788" className="text-gray-500 text-md tracking-wide hover:text-black transition-colors">+91 8078112788</a>
                            </div>

                            <div>
                                <h3 className="text-2xl font-small text-[#333333] mb-1">Social Media</h3>
                                <div className="flex gap-4">
                                    <a href="https://www.instagram.com/_originaloils/" target="_blank" rel="noopener noreferrer">
                                        <SocialIcon type="instagram" />
                                    </a>
                                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                        <SocialIcon type="facebook" />
                                    </a>
                                    <a href="https://wa.me/918078112788" target="_blank" rel="noopener noreferrer">
                                        <SocialIcon type="whatsapp" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* PRODUCT IMAGE - ABSOLUTE POSITIONED */}
                        {/* Adjusted position to overlap and stick out as per design */}
                        <div className="hidden md:block lg:block absolute -left-[85px] bottom-0 w-[600px] h-[510px] z-10 pointer-events-none">
                            <Image
                                src="/oil-bottless.png"
                                alt="Original Oils Products"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>

                    </div>

                    {/* RIGHT COLUMN: FORM */}
                    <div className="lg:col-span-8 w-full ">
                        <h2 className="text-2xl font-medium text-[#333333] mb-4">
                            Write Us a Message
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-5 w-full max-w-4xl">
                            <Input
                                label="First Name"
                                placeholder="Kalyani"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                            <Input
                                label="Last Name"
                                placeholder="Anil"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                            <Input
                                label="Email"
                                placeholder="kalyani123@gmail.com"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <Input
                                label="Telephone"
                                placeholder="+91 87638279"
                                type="tel"
                                name="telephone"
                                value={formData.telephone}
                                onChange={handleChange}
                            />

                            <div className="pt-2">
                                <label className="block text-sm font-medium text-[#333333] mb-2">Message</label>
                                <div className="relative">
                                    <textarea
                                        rows={3}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Write your message here..."
                                        className="w-full border-b border-gray-300 bg-transparent outline-none resize-none text-gray-700 placeholder-gray-400 focus:border-black transition-colors py-2 pr-2 scrollbar-thin scrollbar-webkit"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-3 pt-4">
                                <div className="relative flex items-center">
                                    <input type="checkbox" id="terms" className="peer w-5 h-5 border-2 border-gray-300 rounded overflow-hidden checked:bg-gray-800 checked:border-gray-800 transition-all cursor-pointer appearance-none" required />
                                    <svg className="absolute w-3 h-3 text-white left-1 top-1 hidden peer-checked:block pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <label htmlFor="terms" className="text-gray-500 text-sm hover:text-black cursor-pointer select-none">I agree with Terms & Conditions</label>
                            </div>

                            <div className="flex justify-end pt-4">
                                <button
                                    type="submit"
                                    disabled={status === "sending"}
                                    className="bg-[#5b3a1e] hover:bg-[#4a2e16] text-white text-lg px-14 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === "sending" ? "Sending..." : "Send"}
                                </button>
                            </div>

                            {status === "success" && (
                                <p className="text-green-600 text-center mt-4">Message sent successfully!</p>
                            )}
                            {status === "error" && (
                                <p className="text-red-600 text-center mt-4">Failed to send message. Please try again.</p>
                            )}
                        </form>
                    </div>

                </div>
            </div>
        </main>
    );
}
