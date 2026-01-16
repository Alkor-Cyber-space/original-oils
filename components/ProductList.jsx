"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { products, categories } from "@/data/products";

export default function ProductsPage() {
    const [activeCategory, setActiveCategory] = useState("All Products");

    const filteredProducts = activeCategory === "All Products"
        ? products
              : products.filter(p => p.category.includes(activeCategory));

    return (
        <main className="min-h-screen bg-white text-foreground px-8 py-18 lg:px-10 ">

            <div className="flex flex-col lg:flex-row justify-between items-start  relative ">

                <div className="relative z-10 w-full">
                    <div className="flex flex-col gap-1 items-start">
                        <div className="flex text-[#333333] text-md tracking-widest gap-1">
                            ★★★★★
                        </div>
                        <p className="text-[#666666] text-sm sm:ext-sm md:text-md font-kumbh tracking-wider">Pure Oils for Home Use</p>
                    </div>

                    <div className="mt-3">
                        <h1 className="text-xl sm:text-xl  lg:text-5xl font-playfair text-[#333333] font-medium ">
                            Wellness <br /> Starts Here
                        </h1>
                    </div>
                </div>

                <div className=" absolute right-0 top-0 text-right max-w-125">
                    <p className="text-[#666666] text-md   tracking-wide ">
                        Products Our Customers <br /> Choose Again and Again
                    </p>
                </div>
            </div>

            <div className="text-center  mb-6 ">
                <h2 className="text-4xl lg:text-6xl font-playfair text-[#333333]">Shop Our Bestsellers</h2>
                <p className="text-[#666666] text-lg lg:text-lg mt-4 font-kumbh tracking-wider">Welcome to Originals edathadan</p>

                <div className="flex flex-wrap justify-center gap-3 pt-3">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full font-kumbh tracking-wider border text-sm transition-all duration-300 ${activeCategory === cat
                                ? "bg-[#333333] text-white border-[#333333]"
                                : "bg-white text-gray-500 border-gray-300 hover:border-gray-500"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* PRODUCT GRID */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 sm:gap-x-5 md:gap-x-12">
                {filteredProducts.map((product) => (
                    <Link
                        href={`/products/${product.id}`}
                        key={product.id}
                        className="flex flex-col group cursor-pointer"
                    >
                        <div className="relative w-full aspect-4/3 rounded-3xl bg-[#F3F4F6] overflow-hidden mb-4">
                            <Image
                                src={product.image}
                                alt={product.title}
                                fill
                                className="object-contain w-full h-full transition-all duration-500 group-hover:scale-105 group-hover:blur-[2px]"

                            />

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                                    →
                                </div>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <h3 className="text-sm sm:text-sm md:text-xl font-playfair font-semibold text-[#666666] ">
                                {product.title}
                            </h3>
                            <p className="text-sm sm:text-sm md:text-md font-kumbh text-[#666666] tracking-wide line-clamp-2 sm:line-clamp-5">
                                {product.desc}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>

        </main>
    );
}
