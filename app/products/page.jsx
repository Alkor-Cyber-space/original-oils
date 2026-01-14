import ProductList from "@/components/ProductList";
import ConnectSection from "@/components/ConnectSection";

export const metadata = {
    title: "Products | Original Oils",
    description: "Shop our range of pure, traditionally crafted oils.",
};

export default function ProductsPage() {
    return (
        <main>
            <ProductList />
            <ConnectSection />
        </main>
    );
}
