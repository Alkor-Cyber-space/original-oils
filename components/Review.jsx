"use client";
import Image from "next/image";
import { useState } from "react";

const reviews = [
    {
        id: 1,
        name: "Abhirami",
        role: "Customer",
        image: "/review1.png",
        quote: "I am a big fan of their hair oils, made from edible-quality oils — and that makes the difference.",
        stars: 5,
    },
    {
        id: 2,
        name: "Ajay",
        role: "Customer",
        image: "/testimonial2.jpg",
        quote: "My grandma never entertained junk food or cosmetics, yet she strongly believed in a hair oil made by a coconut oil mill in our village.",
        stars: 5,
    },
    {
        id: 3,
        name: "Sana",
        role: "Customer",
        image: "/avatar2.jpeg",
        quote: "A big fan of their hair oils. It's made with edible-quality oils, and that makes a difference.",
        stars: 5,
    },
    {
        id: 4,
        name: "Arjun",
        role: "Customer",
        image: "/avatar1.jpg", 
        quote: "The quality is unmatched. I've recommended this to all my family members.",
        stars: 5,
    },
    {
        id: 5,
        name: "Meera",
        role: "Customer",
        image: "/review2.jpg", 
        quote: "Finally a natural product that actually works as promised. Love the packaging too!",
        stars: 4,
    },
];

export default function Review() {
    const [activeReview, setActiveReview] = useState(reviews[0]);

    return (
       <>
            <main className="min-h-screen bg-white text-foreground px-8 py-8 lg:px-8 lg:py-18">
                    <div className="">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-24 mb-20 items-start">
    
                        {/* LEFT: Heading & Stars */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#666666]">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                    </svg>
                                ))}
                            </div>
    
                            <h2 className="text-3xl lg:text-4xl font-serif text-[#666666] leading-tight">
                                Beautiful words <br /> from happy clients
                            </h2>
                        </div>
    
                        {/* RIGHT: Review Content */}
                        <div className="flex flex-col lg:flex-row gap-12 items-start">
    
                            {/* IMAGE */}
                           <div className="relative w-full aspect-[3/4] bg-[#F3F4F6] rounded-2xl overflow-hidden mb-4">
    
                                <Image
                                    src={activeReview.image}
                                    alt={activeReview.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
    
                            {/* QUOTE */}
                            <div className=" max-w-3xl">
                                <span className="block text-5xl font-serif text-[#808080] leading-none">
                                    “
                                </span>
    
                                <p className="text-3xl lg:text-4xl font-serif text-[#333333] leading-snug">
                                    {activeReview.quote}
                                </p>
    
                                <div className="mt-20">
                                    <p className="font-semibold text-[#333333]">
                                        {activeReview.name}
                                    </p>
                                    <p className="text-gray-500 text-sm">
                                        {activeReview.role}
                                    </p>
                                </div>
                            </div>
    
                        </div>
                    </div>
    
                    {/* MARQUEE LIST */}
                    <div className="w-full overflow-hidden  ">
                        {/* Animated Container */}
                        <div className="animate-marquee hover:pause whitespace-nowrap">
                            {/* Duplicate list for seamless loop */}
                            {[...reviews, ...reviews, ...reviews].map((review, index) => (
                                <div
                                    key={`${review.id}-${index}`}
                                    className="inline-flex w-[420px] md:w-[520px] lg:w-[620px] shrink-0 px-6 cursor-pointer whitespace-normal"
                                    onClick={() => setActiveReview(review)}
                                >
                                    <div className="flex gap-6 items-start whitespace-normal">
    
                                        {/* Avatar */}
                                        <div className="w-14 h-14 rounded-full overflow-hidden relative bg-gray-200 shrink-0 mt-15">
                                            <Image
                                                src={review.image}
                                                alt={review.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
    
                                        {/* Content */}
                                        <div className=" whitespace-normal max-w-full">
    
                                            {/* Quote mark */}
                                            <span className="block text-4xl font-serif text-[#808080] leading-none">
                                                “
                                            </span>
    
                                            {/* Quote text (IMPORTANT FIX HERE) */}
                                            <p className="text-xl  font-serif text-[#333333] leading-relaxed whitespace-normal break-words">
                                                {review.quote}
                                            </p>
    
                                            {/* Author */}
                                            <div className="mt-5">
                                                <p className="font-medium text-sm text-[#333333]">
                                                    {review.name}
                                                </p>
                                                <p className="text-xs text-gray-400">
                                                    {review.role}
                                                </p>
                                            </div>
    
                                        </div>
                                    </div>
                                </div>
                            ))}
    
    
                        </div>
                    </div>
                </div>

            </main>
       </>

    );
}
