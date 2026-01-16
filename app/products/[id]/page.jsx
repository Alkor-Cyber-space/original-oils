import ProductDetail from "@/components/ProductDetail";
import ConnectSection from "@/components/ConnectSection";
import { products } from "@/data/products";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return products.map((product) => ({
        id: product.id,
    }));
}

export async function generateMetadata({ params }) {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) {
        return {
            title: "Product Not Found",
        };
    }

    return {
        title: `${product.title} | Original Oils`,
        description: product.desc,
    };
}

export default async function ProductDetailPage({ params }) {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) {
        return notFound();
    }

    return (
        <main className="pt-18">
            <ProductDetail product={product} />
            <ConnectSection />
        </main>
    );
}
