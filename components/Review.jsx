"use client";
import Image from "next/image";
import { useState } from "react";

const reviews = [
    {
        id: 1,
        name: "Swetha",
        role: "Customer",
        image: "/review1.png",
        quote: "A big fan of their hair oils. It's made with edible-quality oils, and that makes a difference.",
        stars: 5,
    },

    {
        id: 2,
        name: "Sana",
        role: "Customer",
        image: "/avatar2.jpeg",
        quote: "I am a big fan of their hair oils, made from edible-quality oils — and that makes the difference.",
        stars: 5,
    },
    {
        id: 3,
        name: "Anusree",
        role: "Customer",
        image: "/revieww.jpg",
        quote: "My grandma never entertained junk food or cosmetics, yet she strongly believed in a hair oil made by a coconut oil mill in our village.",
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
        name: "Alvin",
        role: "Customer",
        image: "/r.png",
        quote: "Finally a natural product that actually works as promised. Love the packaging too!",
        stars: 4,
    },
];

export default function Review() {
    const [activeReview, setActiveReview] = useState(reviews[0]);

    return (
        <>
            <main className="min-h-screen bg-white text-foreground px-8 py-2  lg:px-8 sm:py-2 md:py-2 lg:py-3">
                <div className="">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-14 mb-10 items-start">

                        <div className="space-y-4">
                            <div className="flex text-[#666666] text-md tracking-widest gap-1">
                                ★★★★★
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-serif text-[#666666] leading-tight">
                                Beautiful words <br /> from happy clients
                            </h2>
                        </div>

                        <div className="flex flex-row  md:flex-row lg:flex-row gap-12 items-start">

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

                                <p className="text-xl lg:text-4xl font-serif text-[#666666] leading-snug">
                                    {activeReview.quote}
                                </p>

                                <div className="mt-5 sm:mt-5 md:mt-20">
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
