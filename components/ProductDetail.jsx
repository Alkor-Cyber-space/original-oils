"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { CircleCheckBig } from "lucide-react";
import { useState, useEffect } from "react";

export default function ProductDetail({ product }) {
    const relatedProducts = products
        .filter(
            (p) =>
                p.id !== product.id &&
                p.category.some((cat) => product.category.includes(cat))
        )
        .slice(0, 3);

    const [expanded, setExpanded] = useState(false);
    const [currentImage, setCurrentImage] = useState(product.image);

    // Reset currentImage when product changes
    useEffect(() => {
        setCurrentImage(product.image);
    }, [product.image]);

    // Ensure main image is in the gallery
    const gallery = product.gallery ? [...new Set([product.image, ...product.gallery])] : [product.image];

    return (
        <section className="bg-white  px-3 md:px-10 pb-10 min-h-screen">
            <div className="flex flex-col lg:flex-row justify-between items-start  relative pb-3">

                <div className="relative z-10 w-full">
                    <div className="flex flex-col gap-1 items-start">
                        <div className="flex text-[#333333] text-md tracking-widest gap-1">
                            ★★★★★
                        </div>
                        <p className="text-[#666666] text-sm sm:ext-sm md:text-md font-kumbh tracking-wider">Pure Oils for Home Use</p>
                    </div>
                </div>

                <div className=" absolute right-0 top-2 sm:top-2 md:top-0  text-right text-sm sm:text-sm md:text-md text-[#666666] font-medium max-w-125">
                    <p className="">Products Our Customers </p>
                    <p>Choose Again and Again.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div className="space-y-6">
                    <div className="relative w-full aspect-7/5 sm:aspect-[6/5] md:aspect-[8/6] overflow-hidden bg-[#f3f3f3] rounded-3xl flex items-center justify-center">
                        <Image
                            src={currentImage}
                            alt={product.title}
                            fill
                            className="object-contain  w-full h-ful"
                            priority
                        />
                    </div>


                    {gallery && gallery.length > 0 && (
                        <div className="flex gap-4">
                            {gallery.map((img, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setCurrentImage(img)}
                                    className={`relative w-20 h-20 bg-[#f8f8f8] rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${currentImage === img
                                        ? "border-[#4a3b2a]"
                                        : "border-transparent hover:border-gray-300"
                                        }`}
                                >
                                    <Image
                                        src={img}
                                        alt="Thumbnail"
                                        fill
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div>
                    <div className="flex gap-2 text-xs text-gray-400 uppercase tracking-wider mb-2">
                        <span>Shop</span>
                        <span>|</span>
                        <span>{product.title}</span>
                    </div>

                    <div className="flex  items-baseline mb-6">
                        <h1 className="font-playfair text-4xl md:text-5xl text-gray-900 leading-tight">
                            {product.title}
                        </h1>

                    </div>

                    <div className="mb-10">
                        <h3 className="font-playfair text-2xl text-[#333333] mb-6">
                            Key Benefits
                        </h3>
                        <ul className="space-y-4">
                            {product.keyBenefits.map((benefit, idx) => (
                                <li key={idx} className="flex gap-4 items-start  text-lg text-gray-600 leading-relaxed">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button className="bg-[#4a3b2a] text-white px-30 py-3 rounded-full text-sm font-medium tracking-wide hover:bg-[#352900] transition-colors mb-12">
                        Order now
                    </button>
                </div>

            </div>
            <div className="text-lg text-[#666666] leading-relaxed tracking-wider  pt-8">
                <p className={`${!expanded ? "line-clamp-3" : ""}`}>
                    <span className="font-medium text-[#333333]">
                        {product.title}
                    </span>{" "}
                    {product.longDesc}
                </p>

                <button
                    onClick={() => setExpanded(!expanded)}
                    className="mt-3 text-sm text-[#4a3b2a] font-medium hover:underline"
                >
                    {expanded ? "Show less" : "Read more"}
                </button>
            </div>

            <div className="mt-4 ">
                <h3 className="font-playfair text-4xl md:text-4xl text-[#333333] mb-4 tracking-tight">
                    How to use:
                </h3>

                {typeof product.howToUse === "object" &&
                    product.howToUse.type === "detailed" ? (
                    <div className="space-y-6">
                        {product.howToUse.sections.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex gap-6 text-[#666666] items-start"
                            >
                                <span className="shrink-0 mt-2">
                                    <CircleCheckBig size={24} strokeWidth={2} />
                                </span>

                                <div className="flex-1">
                                    <h4 className="text-md md:text-lg font-medium text-[#444444] mb-1">
                                        {item.title}
                                    </h4>
                                    <p className="text-md md:text-lg leading-relaxed tracking-wider">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <ul className="space-y-5 text-md md:text-xl text-[#444444] leading-relaxed tracking-wider">
                        {product.howToUse?.map((step, idx) => (
                            <li
                                key={idx}
                                className="flex gap-6 text-[#666666] items-start"
                            >
                                <span className="shrink-0 mt-2">
                                    <CircleCheckBig size={24} strokeWidth={2} />
                                </span>
                                <span className="flex-1">{step}</span>
                            </li>
                        ))}
                    </ul>
                )}

            </div>

            <div className="my-8">
                <h3 className="font-serif text-2xl text-gray-900 mb-5">
                    More Heritage Products
                </h3>

                <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {relatedProducts.map((item) => (
                        <Link
                            key={item.id}
                            href={`/products/${item.id}`}
                            className="group block text-center"
                        >
                            <div className="rounded-2xl mb-2  overflow-hidden flex items-center justify-center">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-contain rounded-2xl   transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>


                            <h4 className="text-sm font-medium text-gray-900">
                                {item.title}
                            </h4>

                            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="border border-gray-300 rounded-full px-6 py-2 text-xs text-gray-600 uppercase tracking-wider">
                                    View Shop
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

        </section>
    );
}
