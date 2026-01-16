"use client";
import { useState } from "react";
import ConnectSection from "@/components/ConnectSection";
import Review from "@/components/Review";

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
        image: "/review2.jpg",
        quote: "My grandma never entertained junk food or cosmetics, yet she strongly believed in a hair oil made by a coconut oil mill in our village.",
        stars: 5,
    },
    {
        id: 3,
        name: "Sana",
        role: "Customer",
        image: "/review3.jpg",
        quote: "A big fan of their hair oils. It's made with edible-quality oils, and that makes a difference.",
        stars: 5,
    },
    {
        id: 4,
        name: "Arjun",
        role: "Customer",
        image: "/review1.jpg", // Using placeholder
        quote: "The quality is unmatched. I've recommended this to all my family members.",
        stars: 5,
    },
    {
        id: 5,
        name: "Meera",
        role: "Customer",
        image: "/review2.jpg", // Using placeholder
        quote: "Finally a natural product that actually works as promised. Love the packaging too!",
        stars: 4,
    },
];

export default function ReviewsPage() {
    const [activeReview, setActiveReview] = useState(reviews[0]);

    return (
        <>
            <Review />
            <ConnectSection />
        </>

    );
}
